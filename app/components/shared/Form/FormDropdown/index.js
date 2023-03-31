import { updateAddId } from "@/app/redux/slices/filterId";
import { useFormikContext } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./FormDropdown.module.css";

function FormDropdown({
  items,
  name,
  placeholder,
  key = "name",
  label = "name",
}) {
  const { setFieldTouched, setFieldValue, errors, touched, values } =
    useFormikContext();
  const [isOpen, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(values[name]);

  const toggleDropdown = () => setOpen(!isOpen);
  const dispatch = useDispatch();
  const handleItemClick = (id) => {
    switch (name) {
      case "state":
        dispatch(updateAddId({ name: "division", id: id }));
        break;
      case "city":
        dispatch(updateAddId({ name: "city", id: id }));
        break;
      case "upazila":
        dispatch(updateAddId({ name: "upazila", id: id }));
        break;
      default:
        dispatch(updateAddId([]));
    }
    setFieldTouched(name);
    selectedItem === id ? setSelectedItem(null) : setSelectedItem(id);
    toggleDropdown();
    setFieldValue(name, id);
  };

  return (
    <>
      <div className={`${styles.formDropdown} mt-4 mb-4 `}>
        <div className={styles.dropdown}>
          <div className={styles.dropdown_header} onClick={toggleDropdown}>
            {selectedItem
              ? items.find((item) => item.id === selectedItem)?.[label]
              : placeholder}
            <img
              className={`${styles.icon} ${isOpen && styles.open}`}
              src="/raj_aam_wala.jpg"
              loading="lazy"
              alt=""
            />
          </div>
          <div className={`${styles.dropdown_body} ${isOpen && styles.open}`}>
            {items.map((item) => (
              <div
                key={item.id}
                className={styles.dropdown_item}
                onClick={(e) => handleItemClick(item.id, item?.value)}
                id={item[key]}
              >
                <span
                  className={`${styles.dropdown_item_dot} ${
                    item[key] === selectedItem && styles.selected
                  }`}
                >
                  •{" "}
                </span>
                {item[label]}
              </div>
            ))}
          </div>
        </div>
      </div>
      {touched[name] && (
        <span className="text-red-400 text-sm">{errors[name]}</span>
      )}
    </>
  );
}

export default FormDropdown;
