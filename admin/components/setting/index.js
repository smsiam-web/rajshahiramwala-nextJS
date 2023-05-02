import React, { useState } from "react";
import * as Yup from "yup";
import { AppForm } from "../../components/shared/Form";
import { uuid } from "../../../admin/utils/helpers";
import UpdateStaffForm from "./UpdateStaffForm";
import Button from "../shared/Button";

const validationSchema = Yup.object().shape({
  staff_name: Yup.string().required().label("Staff name"),
  staff_email: Yup.string().required().label("Email"),
  staff_password: Yup.string().required().label("Password > 8 chracter"),
  staff_contact: Yup.string().required().label("Phone number"),
  staff_role: Yup.string().label("Staff role"),
});

const Setting = ({ onClick }) => {
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
    <main className="max-w-4xl mx-auto">
      <div className="">
        <main className="h-full overflow-y-auto">
          <div className="grid mx-auto">
            <h1 className="text-2xl pb-5 font-bold text-gray-700">
              Edit Profile
            </h1>
            <AppForm
              initialValues={{
                staff_name: "",
                staff_email: "",
                staff_password: "",
                staff_contact: "",
                staff_role: "",
              }}
              // onSubmit={placeProduct}
              validationSchema={validationSchema}
            >
              <div className="">
                <UpdateStaffForm />
              </div>
            </AppForm>
          </div>
        </main>
      </div>
    </main>
  );
};

export default Setting;
