import React from "react";
import Button from "@/app/components/shared/Button";

const DropDownload = () => {
  return (
    <div className="min-w-0 rounded-lg overflow-hidden bg-gray-50  shadow-xs mb-5">
      <div className="p-4">
        <div className="grid gap-4 grid-cols-2 md:grid-cols-4 xl:grid-cols-3">
          <div className="col-span-2">
            <div className="items-center border border-dashed rounded-md border-blue-400 p-6  flex flex-col h-14 justify-center px-3 cursor-pointer bg-slate-100">
              Drop CSV file
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button
              title="Upload"
              className="bg-gray-300 font-normal w-full h-14"
            />
            <div className="w-full">
              <Button
                title="Download"
                className="bg-blue-400 w-full text-white h-14"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropDownload;
