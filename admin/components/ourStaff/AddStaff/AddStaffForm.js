import React, { useState } from "react";
import FileUpload from "@/app/components/shared/FileUpload";
import { FormDropdown, FormInput } from "../../shared/Form";

const AddStaffForm = () => {
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
        Add Staff Photo
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
        <span>Name</span>
        <FormInput name="staff_name" placeholder="Staff Name" />
      </div>
      <div>
        <span>Email</span>
        <FormInput name="staff_email" placeholder="Staff Email" />
      </div>
      <div>
        <span>Password</span>
        <FormInput
          name="staff_password"
          type="password"
          placeholder="Password must be 8 chracter"
        />
      </div>
      <div>
        <span>Contact Number</span>
        <FormInput name="staff_contact" placeholder="Phone number" />
      </div>
      <div>
        <span>Joining Date</span>
        <FormInput name="joining_date" type="date" placeholder="Joining Date" />
      </div>
      <div>
        <span>Staff Role</span>
        <FormDropdown name="staff_role" placeholder="Staff Role" items={null} />
      </div>
    </div>
  );
};

export default AddStaffForm;
