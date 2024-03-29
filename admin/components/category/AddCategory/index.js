import React, { useState } from "react";
import * as Yup from "yup";
import { AppForm } from "../../shared/Form";
import { uuid } from "../../../utils/helpers";
import FormFooter from "../../shared/FormFooter";
import FormHeader from "../../shared/FormHeader";
import CategoryForm from "./CategoryForm";

const validationSchema = Yup.object().shape({
  parent_category: Yup.string().required().label("Select parent category"),
  child_category: Yup.string().required().label("Select child category"),
  product_type: Yup.string().label("Select type"),
});

const AddCategory = ({ onClick }) => {
  const [loading, setLoading] = useState(false);

  // // place product handler on submit
  // const placeProduct = async (values) => {
  //   setLoading(true);
  //   await saveProductDetails(values);
  //   const product_id = uuid();
  //   router.push("/sucess?product_id=" + product_id);
  //   await placeOrderHandler(values, product_id);
  //   dispatch(updateBasket([]));
  //   setLoading(false);
  // };
  // // save order details on firebase database
  // const placeOrderHandler = async (values, product_id) => {
  //   const productData = {
  //     order_id,
  //     user_details: { ...user },
  //     // payment: true,
  //     billing_details: values,
  //     items: cartItems,
  //     total: cartTotal,
  //     created_at: timestamp,
  //   };
  //   await db.collection("products").doc(product_id).set(productData);
  // };
  return (
    <main>
      <div>
        <AppForm
          initialValues={{
            parent_category: "",
            child_category: "",
            product_type: "",
          }}
          // onSubmit={placeProduct}
          validationSchema={validationSchema}
        >
          <div className="h-screen relative">
            <div className="w-full">
              <FormHeader
                onClick={onClick}
                title="Add Category"
                sub_title={
                  "Add your category and necessary information from here"
                }
              />
            </div>

            <div className="w-full h-[75%] md:h-[80%] overflow-y-scroll py-3 px-6 md:px-4 mb-4">
              <CategoryForm />
            </div>

            <div className="fixed bottom-0 right-0 w-full bg-gray-50">
              <FormFooter onClick={onClick} acceptBtn={"Add Category"} />
            </div>
          </div>
        </AppForm>
      </div>
    </main>
  );
};

export default AddCategory;
