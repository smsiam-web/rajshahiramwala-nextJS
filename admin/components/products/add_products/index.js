import React, { useState } from "react";
import ProductDetailsFrom from "./ProductDetailsFrom";
import * as Yup from "yup";
import { AppForm, FormBtn } from "../../shared/Form";
import { uuid } from "../../../utils/helpers";
import FormHeader from "../../shared/FormHeader";
import { db, timestamp } from "@/app/utils/firebase";
import Button from "../../shared/Button";
import { useRouter } from "next/router";

const validationSchema = Yup.object().shape({
  sku: Yup.string().label("Product SKU"),
  product_name: Yup.string().max(100).required().label("Product Title"),
  slug: Yup.string().required().label("Product slug"),
  product_description: Yup.string()
    .max(500)
    .required()
    .label("Product details"),
  parent_category: Yup.string().required().label("Select parent category"),
  product_type: Yup.string().required().label("Select type"),
  unit: Yup.string().required().label("Unit"),
  quantity: Yup.number().required().label("Quantity"),
  price: Yup.number().required().label("Price"),
  sale_price: Yup.number().label("Sale price"),
  product_tag: Yup.string()
    .required()
    .label("Product Tag (Write then press enter to add another new tag)"),
});

const AddProduts = ({ onClick }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // place product handler on submit
  const placeProduct = async (values) => {
    setLoading(true);
    const product_id = uuid();
    // await saveProductDetails(values, product_id);
    await placeProductHandler(values, product_id);
    router.push("/admin/products/id=?" + product_id);
    setLoading(false);
  };

  // save billing details in user collection
  // const saveProductDetails = async (values, product_id) => {
  //   const ref = db.collection("products").doc(product_id);
  //   return ref.set(
  //     {
  //       product_details: values,
  //     },
  //     { merge: true }
  //   );
  // };
  // save order details on firebase database
  const placeProductHandler = async (values, product_id) => {
    await db.collection("products").doc(product_id).set({
      product_details: values,
      isPublished: false,
      timestamp,
    });
  };
  return (
    <main>
      <div>
        <AppForm
          initialValues={{
            sku: "",
            product_name: "",
            slug: "",
            product_description: "",
            parent_category: "",
            product_type: "",
            unit: "",
            quantity: "",
            price: "",
            sale_price: "",
            product_tag: "",
          }}
          onSubmit={placeProduct}
          validationSchema={validationSchema}
        >
          <div className="h-screen relative">
            <div className="w-full">
              <FormHeader
                onClick={onClick}
                title={"Add Product"}
                sub_title="Add your product and necessary information from here."
              />
            </div>

            <div className="w-full h-[75%] md:h-[80%] overflow-y-scroll py-3 px-6 md:px-4 mb-4">
              <ProductDetailsFrom />
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
                    onClick={placeProduct}
                    title="Add Product"
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

export default AddProduts;
