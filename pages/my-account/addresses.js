import { AppForm, FormBtn } from "@/app/components/shared/Form";
import UpdateAddress from "@/app/components/update/UpdateAddress";
import DashboardLayout from "@/app/layout/DashboardLayout";
import { selectUser } from "@/app/redux/slices/authSlice";
import { db } from "@/app/utils/firebase";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  state: Yup.string().label("Division"),
  city: Yup.string().required().label("City"),
  upazila: Yup.string().required().label("Upazila"),
  union: Yup.string().required().label("Union"),
  street_address: Yup.string().required().label("State / Province"),
  zip: Yup.string().required().label("ZIP / Postal code"),
  phone: Yup.string().required().label("Phone"),
  email: Yup.string().email().required().label("Email"),
});

const Adresses = () => {
  const user = useSelector(selectUser);
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // place order handler on submit
  const updateAddress = async (values) => {
    setLoading(true);
    await saveUpdateAddress(values);
    router.push("/my-account");
    setLoading(false);
  };

  // save billing details in user collection
  const saveUpdateAddress = async (values) => {
    const ref = db.collection("users").doc(user.uid);
    return ref.set(
      {
        billing_details: values,
      },
      { merge: true }
    );
  };

  return (
    <DashboardLayout>
      <AppForm
        initialValues={{
          state: user?.billing_details?.state || "",
          city: user?.billing_details?.city || "",
          upazila: user?.billing_details?.upazila || "",
          union: user?.billing_details?.union || "",
          street_address: user?.billing_details?.street_address || "",
          zip: user?.billing_details?.zip || "",
          phone: user?.billing_details?.phone || "",
          email: user?.billing_details?.email || "",
        }}
        onSubmit={updateAddress}
        validationSchema={validationSchema}
      >
        <div className="md:px-8 md:py-4">
          <div className="mb-4 md:mb-6">
            <UpdateAddress />
          </div>
          <FormBtn
            title={"Update Address"}
            onClick={updateAddress}
            loading={loading}
          />
        </div>
      </AppForm>
    </DashboardLayout>
  );
};

export default Adresses;
