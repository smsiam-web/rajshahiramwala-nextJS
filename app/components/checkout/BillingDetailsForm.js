import React from "react";
import { AppTextArea, FormDropdown, FormInput } from "../shared/Form";
import Division from "../../data/Divisions/divisions.json";
import State from "../../data/State/districts.json";
import Upazilas from "../../data/Upazilas/upazilas.json";
import Unions from "../../data/Unions/unions.json";

const COUNTRIES = [
  { title: "United States" },
  { title: "United Kingdom" },
  { title: "Canada" },
  { title: "Australia" },
  { title: "Bangladesh" },
  { title: "France" },
  { title: "Italy" },
  { title: "Spain" },
  { title: "Netherlands" },
  { title: "Belgium" },
  { title: "Austria" },
  { title: "Switzerland" },
  { title: "Sweden" },
  { title: "Norway" },
  { title: "Denmark" },
  { title: "Finland" },
  { title: "Ireland" },
  { title: "New Zealand" },
  { title: "Japan" },
  { title: "China" },
  { title: "Hong Kong" },
  { title: "Singapore" },
  { title: "India" },
  { title: "Brazil" },
  { title: "Mexico" },
  { title: "Argentina" },
  { title: "Chile" },
  { title: "Colombia" },
  { title: "Peru" },
  { title: "Venezuela" },
  { title: "South Africa" },
  { title: "Egypt" },
  { title: "Western" },
];

const BillingDetailsForm = () => {
  const DIVISION = Division[2].data;
  const CITY = State[2].data;
  const UPAZILAS = Upazilas[2].data;
  const UNIONS = Unions[2].data;

  return (
    <div>
      <FormInput name="first_name" placeholder="First name" />
      <FormInput name="last_name" placeholder="Last name" />
      <FormDropdown name="state" placeholder="বিভাগ" items={DIVISION} />
      <FormDropdown name="city" placeholder="জেলা" items={CITY} />
      <FormDropdown name="upazila" placeholder="উপজেলা" items={UPAZILAS} />
      <FormDropdown name="union" placeholder="ইউনিয়ন" items={UNIONS} />
      <FormInput name="street_address" placeholder="Street address" />
      <FormInput name="zip" placeholder="ZIP / Postal code" />
      <FormInput name="phone" placeholder="Phone" />
      <FormInput name="email" placeholder="Email address" type="email" />
      <AppTextArea
        name="notes"
        placeholder="Order notes (optional)"
        type="textarea"
      />
    </div>
  );
};

export default BillingDetailsForm;
