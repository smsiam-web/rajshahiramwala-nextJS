import React, { useState } from "react";
import BillingInfo from "./BillingInfo";
import YourOrder from "./YourOrder";
import * as Yup from "yup";
import { AppForm } from "../shared/Form";
import { db, timestamp } from "@/app/utils/firebase";
import { useSelector } from "react-redux";
import { selectUser } from "@/app/redux/slices/authSlice";
import { selectItems, selectTotalPrice } from "@/app/redux/slices/basketSlice";
import { uuid } from "@/app/utils/helpers";

const validationSchema = Yup.object().shape({
  first_name: Yup.string().max(25).required().label("First name"),
  last_name: Yup.string().max(25).required().label("Last name"),
  company: Yup.string().label("Company name"),
  country: Yup.string().required().label("Country / Region"),
  address: Yup.string().required().label("Address"),
  city: Yup.string().required().label("City"),
  state: Yup.string().required().label("State / Province"),
  zip: Yup.string().required().label("ZIP / Postal code"),
  phone: Yup.string().required().label("Phone"),
  email: Yup.string().email().required().label("Email"),
  notes: Yup.string().max(500).label("Order notes"),
});

const CheckoutContent = () => {
  const user = useSelector(selectUser);
  const cartItems = useSelector(selectItems);
  const cartTotal = useSelector(selectTotalPrice);
  const [loading, setLoading] = useState(false);

  const placeOrder = async (values) => {
    setLoading(true);
    await saveBillingDetails(values);
    await placeOrderHandler(values);
    setLoading(false);
  };

  const saveBillingDetails = async (values) => {
    const ref = db.collection("users").doc(user.uid);
    return ref.set(
      {
        billing_details: values,
      },
      { merge: true }
    );
  };

  const placeOrderHandler = async (values) => {
    const order_id = uuid();
    const orderData = {
      order_id,
      user_details: { ...user },
      payment_sucess: true,
      billing_details: values,
      items: cartItems,
      total: cartTotal,
      created_at: timestamp,
    };
    await db.collection("orders").doc(order_id).set(orderData);
  };

  return (
    <main className="py-6 sm:py-8 md:py-10 lg:py-12">
      <div className="flex flex-wrap md:flex-nowrap gap-5">
        <AppForm
          initialValues={{
            first_name: user?.billing_details?.first_name || "",
            last_name: user?.billing_details?.last_name || "",
            company: user?.billing_details?.company || "",
            country: user?.billing_details?.country || "",
            address: user?.billing_details?.address || "",
            city: user?.billing_details?.city || "",
            state: user?.billing_details?.state || "",
            zip: user?.billing_details?.zip || "",
            phone: user?.billing_details?.phone || "",
            email: user?.billing_details?.email || "",
            notes: "",
          }}
          onSubmit={placeOrder}
          validationSchema={validationSchema}
        >
          <div className="w-full md:w-[60%]">
            <BillingInfo />
          </div>
          <div className="w-full md:w-[40%]">
            <YourOrder placeOrder={placeOrder} loading={loading} />
          </div>
        </AppForm>
      </div>
    </main>
  );
};

export default CheckoutContent;
