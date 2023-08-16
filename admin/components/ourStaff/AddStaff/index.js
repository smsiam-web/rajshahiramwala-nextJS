import React, { useState } from "react";
import * as Yup from "yup";
import { AppForm, FormBtn } from "../../shared/Form";
import { uuid } from "../../../utils/helpers";
import FormHeader from "../../shared/FormHeader";
import AddStaffForm from "./AddStaffForm";
import Button from "../../shared/Button";
import { db, timestamp } from "@/app/utils/firebase";
import { useRouter } from "next/router";
import { notifications } from "@mantine/notifications";

const validationSchema = Yup.object().shape({
  staff_name: Yup.string().required().label("Staff name"),
  staff_email: Yup.string().required().label("Email"),
  staff_password: Yup.string().required().label("Password > 8 chracter"),
  staff_contact: Yup.string().required().label("Phone number"),
  staff_role: Yup.string().required().label("Staff role"),
});

const AddStaff = ({ onClick }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // place product handler on submit
  const placeStaff = async (values) => {
    setLoading(true);
    const staff_id = uuid();
    await placeStaffHandler(values, staff_id);
    router.push("/admin/our-staff/id=?" + staff_id);
    setLoading(false);
    notifications.show({
      title: "Staff Added Sucessfully",
      message: `${name}, ID: ${id}`,
    });
  };

  // save order details on firebase database
  const placeStaffHandler = async (values, staff_id) => {
    await db.collection("ourStaff").doc(staff_id).set({
      staff_id,
      staff_details: values,
      timestamp,
    });
  };
  return (
    <main>
      <div>
        <AppForm
          initialValues={{
            staff_name: "",
            staff_email: "",
            staff_password: "",
            staff_contact: "",
            staff_role: "",
          }}
          onSubmit={placeStaff}
          validationSchema={validationSchema}
        >
          <div className="h-screen relative">
            <div className="w-full">
              <FormHeader
                onClick={onClick}
                title="Add Staff"
                sub_title={"Submit your necessary information carefully"}
              />
            </div>

            <div className="w-full h-[75%] md:h-[80%] overflow-y-scroll py-3 px-6 md:px-4 mb-4">
              <AddStaffForm />
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
                    onClick={placeStaff}
                    title="Add Staff"
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

export default AddStaff;
