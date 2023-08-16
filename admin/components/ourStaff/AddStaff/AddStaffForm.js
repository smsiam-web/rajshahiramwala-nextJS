import React, { useState } from "react";
import { FormDropdown, FormInput } from "../../shared/Form";
import { ROLE } from "../../../configs/index";

const AddStaffForm = () => {
  return (
    <div className="max-h-full">
      <div>
        <span>Staff Name</span>
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
        <span>Staff Role</span>
        <FormDropdown name="staff_role" placeholder="Staff Role" items={ROLE} />
      </div>
    </div>
  );
};

export default AddStaffForm;
