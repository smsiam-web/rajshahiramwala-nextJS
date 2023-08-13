import React, { useState } from "react";
import OrderDetailsForm from "./OrderDetailsForm";
import * as Yup from "yup";
import { AppForm, FormBtn } from "../../shared/Form";
import FormHeader from "../../shared/FormHeader";
import { db, timestamp } from "@/app/utils/firebase";
import Button from "../../shared/Button";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectOrder } from "@/app/redux/slices/orderSlice";

const validationSchema = Yup.object().shape({
  phone_number: Yup.string()
    .matches(/^[0-9]{11}$/, "Must be exactly 11 digits")
    .required()
    .label("Phone number"),
  customer_name: Yup.string().max(50).required().label("Name"),
  customer_address: Yup.string().max(300).required().label("Address"),
  discount: Yup.number().required().label("Discount"),
  note: Yup.string().max(500).label("Note"),
  patali_gol: Yup.number().positive().label("Weight"),
  patali_pata: Yup.number().positive().label("Weight"),
  patali_foial: Yup.number().positive().label("Weight"),
  patali_liquid: Yup.number().positive().label("Weight"),
  patali_dana: Yup.number().positive().label("Weight"),
});

const AddOrder = ({ onClick }) => {
  const [loading, setLoading] = useState(false);
  const order = useSelector(selectOrder);
  const [order_uid, setOrder_id] = useState(1001 + order.length);
  const router = useRouter();

  // get order from redux

  // place product handler on submit
  const placeOrder = async (values) => {
    setLoading(true);
    const order_id = `${order_uid}`;
    console.log(order_id);

    // await saveProductDetails(values, order_id);
    await placeOrderHandler(values, order_id);
    router.push("/admin/place-order/id=?" + order_id);
    setLoading(false);
  };

  // save order details on firebase database
  const placeOrderHandler = async (values, order_id) => {
    await db.collection("placeOrder").doc(order_id).set({
      order_id,
      order_details: values,
      order_status: "pending",
      timestamp,
    });
  };

  return (
    <main>
      <div>
        <AppForm
          initialValues={{
            phone_number: "",
            customer_name: "",
            customer_address: "",
            discount: "",
            note: "",
            patali_gol: "",
            patali_pata: "",
            patali_foial: "",
            patali_liquid: "",
            patali_dana: "",
          }}
          onSubmit={placeOrder}
          validationSchema={validationSchema}
        >
          <div className="h-screen relative">
            <div className="w-full">
              <FormHeader
                onClick={onClick}
                title={"Place Order"}
                sub_title="Add your product and necessary information from here."
              />
            </div>

            <div className="w-full h-[75%] md:h-[80%] overflow-y-scroll py-3 px-6 md:px-4 mb-4">
              <OrderDetailsForm />
            </div>

            <div className="fixed bottom-0 right-0 w-full bg-gray-50">
              <div className="py-5 px-6 md:px-4 max-h-full grid grid-cols-4 gap-4">
                <div className="col-span-2">
                  <Button
                    onClick={onClick}
                    title="Cancel"
                    className="bg-red-100 hover:bg-red-200 hover:shadow-lg text-red-600 transition-all duration-300 w-full"
                  />
                </div>
                <div className="col-span-2">
                  <FormBtn
                    loading={loading}
                    onClick={placeOrder}
                    title="Submit"
                    className="bg-blue-400 hover:bg-blue-500 hover:shadow-lg text-white transition-all duration-300 w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </AppForm>
      </div>
    </main>
  );
};

export default AddOrder;
