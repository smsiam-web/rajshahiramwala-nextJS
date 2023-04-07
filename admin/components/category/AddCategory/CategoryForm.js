import React, { useState } from "react";
import FileUpload from "@/app/components/shared/FileUpload";
import { AppForm, FormDropdown, FormInput } from "../../shared/Form";

const CategoryForm = () => {
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
      />
      <div>
        <span>Parent Category</span>
        <FormDropdown
          name="product_description"
          placeholder="Select parent category"
          items={null}
        />
      </div>
      <div>
        <span>Child Category</span>
        <FormInput name="child_category" placeholder="Select child category" />
      </div>
      <div>
        <span>Product Type</span>
        <FormInput name="product_type" placeholder="Select type" />
      </div>
    </div>
  );
};

export default CategoryForm;
