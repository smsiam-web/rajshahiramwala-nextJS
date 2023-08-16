import { selectStaff } from "@/app/redux/slices/staffSlice";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { usePathname } from "next/navigation";
import { AppForm, FormBtn, FormDropdown, FormInput } from "../shared/Form";
import { ROLE } from "../../configs/index";
import { db, timestamp } from "@/app/utils/firebase";
import * as Yup from "yup";
import { useRouter } from "next/router";

const validationSchema = Yup.object().shape({
  staff_name: Yup.string().required().label("Staff name"),
  staff_email: Yup.string().required().label("Email"),
  staff_password: Yup.string().required().label("Password > 8 chracter"),
  staff_contact: Yup.string().required().label("Phone number"),
  staff_role: Yup.string().required().label("Staff role"),
});

const SingleStaff = () => {
  const [loading, setLoading] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [staff, setStaff] = useState([]);
  const [id, setId] = useState(usePathname()?.split("=")[1]);
  const staffs = useSelector(selectStaff);
  const router = useRouter();

  console.log(staff);

  useEffect(() => {
    staffs &&
      staffs?.map((item) => {
        if (item.id !== id) return;
        setStaff(item);
        setIsShow(true);
      });
  }, [id]);

  // place product handler on submit
  const updateStaff = async (values) => {
    setLoading(true);
    const staff_id = id;
    await updateStaffHandler(values, staff_id);
    router.push("/admin/our-staff");
    setLoading(false);
  };

  // save order details on firebase database
  const updateStaffHandler = async (values, staff_id) => {
    await db.collection("ourStaff").doc(staff_id).set({
      staff_id,
      staff_details: values,
      timestamp,
    });
  };

  return (
    <>
      <div className="bg-gray-50 p-5 rounded-xl">
        <div className="max-w-2xl">
          {isShow && (
            <AppForm
              initialValues={{
                staff_name: staff?.staff_details?.staff_name || "",
                staff_email: staff?.staff_details?.staff_email || "",
                staff_password: staff?.staff_details?.staff_password || "",
                staff_contact: staff?.staff_details?.staff_contact || "",
                staff_role: staff?.staff_details?.staff_role || "",
              }}
              onSubmit={updateStaff}
              validationSchema={validationSchema}
            >
              <div>
                <span>Staff Name</span>
                <FormInput name="staff_name" placeholder="" />
              </div>
              <div>
                <span>Email</span>
                <FormInput name="staff_email" placeholder="Staff Email" />
              </div>
              <div>
                <span>Password</span>
                <FormInput
                  name="staff_password"
                  type="password"
                  placeholder="Password must be 8 chracter"
                />
              </div>
              <div>
                <span>Contact Number</span>
                <FormInput name="staff_contact" placeholder="Phone number" />
              </div>

              <div>
                <span>Staff Role</span>
                <FormDropdown
                  name="staff_role"
                  placeholder="Staff Role"
                  items={ROLE}
                />
              </div>

              <div className="py-5 px-6 md:px-4 max-h-full grid grid-cols-4 gap-4">
                <div className="col-end-5">
                  <FormBtn
                    loading={loading}
                    onClick={updateStaff}
                    title="Update"
                    className="bg-blue-400 hover:bg-blue-500 hover:shadow-lg text-white transition-all duration-300 w-full"
                  />
                </div>
              </div>
            </AppForm>
          )}
        </div>
      </div>
    </>
  );
};

export default SingleStaff;
