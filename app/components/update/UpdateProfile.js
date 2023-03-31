import React from "react";
import { FormInput } from "../shared/Form";

const UpdateProfile = () => {
  return (
    <main>
      <center className="border-b md:border-none mb-4">
        <h1 className="text-2xl md:text-4xl font-bold my-4">Update Profile</h1>
      </center>
      {/* image input field  */}
      <div>
        <label className="block text-gray-500 font-medium text-sm leading-none mb-2">
          Photo
        </label>
        <div className="mt-1 flex items-center">
          <div className="w-full text-center">
            <div
              className="px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md cursor-pointer"
              role="button"
              tabIndex="0"
            >
              <input
                id="upfile"
                accept="image/*"
                type="file"
                autoComplete="off"
                tabIndex="-1"
                className="hidden"
                onchange={() => sub(this)}
              />
              <span className="mx-auto flex justify-center">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-3xl text-primary"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="16 16 12 12 8 16"></polyline>
                  <line x1="12" y1="12" x2="12" y2="21"></line>
                  <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
                  <polyline points="16 16 12 12 8 16"></polyline>
                </svg>
              </span>
              <p className="text-sm mt-2">Drag your image here</p>
              <em className="text-xs text-gray-400">
                (Only *.jpeg, jpg and *.png images will be accepted)
              </em>
            </div>
            <aside className="flex flex-row flex-wrap mt-4"></aside>
          </div>
        </div>
        {/* <div className="border border-dashed h-28">
            <input type="file" className="hidden" />
          </div> */}
      </div>
      <div className="w-full mt-10">
        <div className="grid grid-cols-6 gap-6">
          <div class="col-span-6 sm:col-span-3">
            <label className="block text-gray-500 font-medium text-sm leading-none mb-2">
              Full Name
            </label>
            <div className="relative">
              <FormInput name="full_name" placeholder="Full name" />
            </div>
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label className="block text-gray-500 font-medium text-sm leading-none mb-2">
              Email Address
            </label>
            <div className="relative">
              <FormInput
                name="email"
                placeholder="Your Email"
                disabled
                className="bg-slate-200"
              />
            </div>
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label className="block text-gray-500 font-medium text-sm leading-none mb-2">
              Phone/Mobile
            </label>
            <div className="relative">
              <FormInput name="phone" placeholder="Phone" />
            </div>
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label className="block text-gray-500 font-medium text-sm leading-none mb-2">
              Street Address
            </label>
            <div className="relative">
              <FormInput
                name="street_address"
                placeholder="Rangs Pearl, 76 Rd 12, Dhaka 1213"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default UpdateProfile;
