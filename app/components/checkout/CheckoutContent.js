import Link from "next/link";
import React, { useState } from "react";
import { TbCurrencyTaka } from "react-icons/tb";
import CartTableMobile from "../cart/CartTableMobile";
import Button from "../shared/Button";
import BillingInfo from "./BillingInfo";
import YourOrder from "./YourOrder";
import * as Yup from "yup";
import { AppForm } from "../shared/Form";

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
  const [loading, setLoading] = useState(false);

  const placeOrder = (values) => {
    setLoading(true);
    console.log(values);
    setTimeout(function () {
      setLoading(false);
    }, 2000);
  };

  return (
    <main className="py-6 sm:py-8 md:py-10 lg:py-12">
      <div className="flex flex-wrap md:flex-nowrap gap-5">
        <AppForm
          initialValues={{
            first_name: "",
            last_name: "",
            company: "",
            country: "",
            address: "",
            city: "",
            state: "",
            zip: "",
            phone: "",
            email: "",
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
