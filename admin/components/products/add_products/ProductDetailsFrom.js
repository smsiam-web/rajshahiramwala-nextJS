import React, { useState } from "react";
import FileUpload from "../../shared/FileUP";
import { AppTextArea, FormDropdown, FormInput } from "../../shared/Form";
import { PCATEGORY } from "@/admin/configs";

const ProductDetailsFrom = () => {
  const formInitial = {
    thumbImage: "",
  };
  const [formData, setFormData] = useState(formInitial);
  const dataChangerThumbnail = (value) => {
    setFormData({ ...formData, thumbImage: value });
  };

  return (
    <div className="max-h-full">
      <label className="block text-gray-500 font-medium text-sm leading-none mb-2">
        Photo
      </label>
      <FileUpload
        name="thumbImage"
        dataChanger={(value) => dataChangerThumbnail(value)}
        type="image"
        prev_src={"localhost:8001/" + formData?.thumbImage}
        required
        allowed_extensions={["jpg", "jpeg", "png", "gif"]}
        recommended="Recommenden size: Square / 🔳"
        fileLocation="products"
      />
      <div>
        <span>Product SKU</span>
        <FormInput name="sku" placeholder="Product SKU" />
      </div>
      <div>
        <span>Product Title/Name</span>
        <FormInput name="product_name" placeholder="Product title" />
      </div>
      <div>
        <span>Product Slug</span>
        <FormInput name="slug" placeholder="Product slug" />
      </div>
      <div>
        <span>Product Description</span>
        <AppTextArea name="product_description" placeholder="Product details" />
      </div>
      <div>
        <span>Parent Category</span>
        <FormDropdown
          name="parent_category"
          placeholder="Select parent category"
          items={PCATEGORY}
        />
      </div>
      <div>
        <span>Child Category</span>
        <FormDropdown
          name="child_category"
          placeholder="Select child category"
          items={PCATEGORY}
        />
      </div>
      <div>
        <span>Product Type</span>
        <FormDropdown
          name="product_type"
          placeholder="Select type"
          items={PCATEGORY}
        />
      </div>
      <div>
        <span>Unit (kg/pc/lb/ml/g...etc)</span>
        <FormInput name="unit" placeholder="Unit" />
      </div>
      <div>
        <span>Product Quantity</span>
        <FormInput name="quantity" placeholder="Quantity" />
      </div>
      <div>
        <span>Product Price</span>
        <FormInput name="price" placeholder="Price" />
      </div>
      <div>
        <span>Sale Price</span>
        <FormInput name="sale_price" placeholder="Sale price" />
      </div>
      <div className="">
        <span>Product Tag</span>
        <FormInput
          name="product_tag"
          placeholder="Product Tag (Write then press enter to add another new tag)"
        />
      </div>
    </div>
  );
};

export default ProductDetailsFrom;
