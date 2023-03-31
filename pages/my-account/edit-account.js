import DashboardLayout from "@/app/layout/DashboardLayout";
import React, { useState } from "react";
import * as Yup from "yup";
import { AppForm, FormBtn } from "../../app/components/shared/Form";
import { useSelector } from "react-redux";
import { selectUser } from "@/app/redux/slices/authSlice";
import UpdateProfile from "@/app/components/update/UpdateProfile";
import { db } from "@/app/utils/firebase";
import { useRouter } from "next/router";

const validationSchema = Yup.object().shape({
  full_name: Yup.string().max(25).required().label("Full name"),
  street_address: Yup.string().required().label("State / Province"),
  phone: Yup.string().required().label("Phone"),
  email: Yup.string().email().required().label("Email"),
});

const EditAccount = () => {
  const user = useSelector(selectUser);
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // place order handler on submit
  const updateAccount = async (values) => {
    setLoading(true);
    await saveUpdateDetails(values);
    router.push("/my-account");
    setLoading(false);
  };

  // save billing details in user collection
  const saveUpdateDetails = async (values) => {
    const ref = db.collection("users").doc(user.uid);
    return ref.set(
      {
        name: values.full_name,
        billing_details: {
          full_name: values.full_name,
          street_address: values.street_address,
          phone: values.phone,
        },
      },
      { merge: true }
    );
  };

  return (
    <DashboardLayout>
      <AppForm
        initialValues={{
          full_name: user?.billing_details?.full_name || "",
          street_address: user?.billing_details?.street_address || "",
          phone: user?.billing_details?.phone || "",
          email: user?.email || "",
        }}
        onSubmit={updateAccount}
        validationSchema={validationSchema}
      >
        <div className="md:px-8 md:py-4">
          <UpdateProfile />
          <FormBtn
            title={"Update Profile"}
            onClick={updateAccount}
            loading={loading}
          />
        </div>
      </AppForm>
    </DashboardLayout>
  );
};

export default EditAccount;
