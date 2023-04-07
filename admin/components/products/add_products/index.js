import React, { useState } from "react";
import ProductDetailsFrom from "./ProductDetailsFrom";
import * as Yup from "yup";
import { AppForm } from "../../shared/Form";
import { uuid } from "../../../utils/helpers";
import FormFooter from "./FormFooter";
import FormHeader from "./FormHeader";

const validationSchema = Yup.object().shape({
  sku: Yup.string().label("Product SKU"),
  product_name: Yup.string().max(100).required().label("Product Title"),
  slug: Yup.string().required().label("Product slug"),
  product_description: Yup.string()
    .max(500)
    .required()
    .label("Product details"),
  parent_category: Yup.string().required().label("Select parent category"),
  child_category: Yup.string().required().label("Select child category"),
  product_type: Yup.string().required().label("Select type"),
  unit: Yup.number().required().label("Unit"),
  quantity: Yup.number().required().label("Quantity"),
  price: Yup.number().required().label("Price"),
  sale_price: Yup.number().label("Sale price"),
  product_tag: Yup.string()
    .required()
    .label("Product Tag (Write then press enter to add another new tag)"),
});

const AddProduts = ({ onClick }) => {
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
            sku: "",
            product_name: "",
            slug: "",
            product_description: "",
            parent_category: "",
            child_category: "",
            product_type: "",
            unit: "",
            quantity: "",
            price: "",
            sale_price: "",
            product_tag: "",
          }}
          // onSubmit={placeProduct}
          validationSchema={validationSchema}
        >
          <div className="h-screen relative">
            <div className=" w-full shadow-md">
              <FormHeader onClick={onClick} />
            </div>

            <div className="w-full h-[75%] md:h-[80%] overflow-y-scroll py-3 px-6 md:px-4 mb-4">
              <ProductDetailsFrom />
            </div>

            <div className="fixed bottom-0 right-0 w-full bg-gray-50">
              <FormFooter onClick={onClick} />
            </div>
          </div>
        </AppForm>
      </div>
    </main>
  );
};

export default AddProduts;
