import DashboardLayout from "@/app/layout/DashboardLayout";
import React, { useState } from "react";
import * as Yup from "yup";
import { AppForm, FormBtn } from "../../app/components/shared/Form";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "@/app/redux/slices/authSlice";
import UpdateProfile from "@/app/components/update/UpdateProfile";
import { db } from "@/app/utils/firebase";
import { useRouter } from "next/router";
import updateProfile from "@/app/redux/slices/updateProfile";

const validationSchema = Yup.object().shape({
  name: Yup.string().max(25).required().label("Full name"),
  // image: Yup.object().label("Upload your imgae"),
  street_address: Yup.string().required().label("State / Province"),
  phone: Yup.string().required().label("Phone"),
  email: Yup.string().email().required().label("Email"),
});

const EditAccount = () => {
  const dispatch = useDispatch();
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
        name: values.name,
        billing_details: {
          full_name: values.name,
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
          // image: [],
          name: user?.name || "",
          street_address: user?.billing_details?.street_address || "",
          phone: user?.billing_details?.phone || "",
          email: user?.email || "",
        }}
        onSubmit={updateAccount}
        validationSchema={validationSchema}
      >
        <div className="md:px-8 md:py-4">
          <div className="mb-4 md:mb-6">
            <UpdateProfile />
          </div>
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
