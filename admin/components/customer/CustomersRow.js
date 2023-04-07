import { Tooltip } from "@mantine/core";
import React from "react";
import { useState } from "react";
import { useMantineTheme } from "@mantine/core";
import { BsBagPlus } from "react-icons/bs";
import { RiDeleteBinLine } from "react-icons/ri";
import Link from "next/link";

const CustomersRow = () => {
  const theme = useMantineTheme();
  const [checked, setChecked] = useState(false);
  return (
    <div className="grid gap-4 w-full overflow-hidden">
      {/* <h1 className="text-title pb-4 text-2xl font-medium">Recent Order</h1> */}
      <div className="w-full overflow-x-scroll rounded-md">
        <table className="w-full whitespace-nowrap table-auto">
          <thead className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b border-gray-200  bg-gray-100">
            <tr>
              <td className="px-4 py-3 ">ID</td>
              <td className="px-4 py-3 ">Joining Date</td>
              <td className="px-4 py-3 ">Name</td>
              <td className="px-4 py-3 ">Email</td>
              <td className="px-4 py-3 ">Phone</td>
              <td className="px-4 py-3 ">Address</td>
              <td className="px-4 py-3 ">ACTIONS</td>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100 ">
            <tr className="">
              <td className="px-4 py-3">
                <span className="text-sm">23232D</span>
              </td>
              <td className="px-4 py-3">
                <span className="text-sm ">26 Jul. 2001</span>
              </td>
              <td className="px-4 py-3 flex items-center justify-start gap-2">
                <span>Syed Siam Chowdhury</span>
              </td>

              <td className="px-4 py-3">
                <span className="">smsiam696@gmail.com</span>
              </td>
              <td className="px-4 py-3">
                <span className="text-sm flex items-center justify-start">
                  +880 1722 166051
                </span>
              </td>
              <td className="px-4 py-3">
                <span className="text-sm flex items-center justify-start">
                  Kahaloo Upazila, Kahaloo, Bogura.
                </span>
              </td>
              <td className="px-4 py-3">
                <div className="text-sm font-semibold flex gap-4 justify-start text-sub-title items-center">
                  <Tooltip label="Views Order" color="blue" withArrow>
                    <Link href={"/admin/customer-order"}>
                      <span className="cursor-pointer hover:text-blue-400">
                        <BsBagPlus size={16} />
                      </span>
                    </Link>
                  </Tooltip>
                  <Tooltip label="Delete User" color="red" withArrow>
                    <span className="cursor-pointer hover:text-red-400">
                      <RiDeleteBinLine size={16} />
                    </span>
                  </Tooltip>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomersRow;
