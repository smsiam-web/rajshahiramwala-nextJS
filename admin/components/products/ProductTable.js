import { Tooltip } from "@mantine/core";
import React from "react";
import { TbListDetails } from "react-icons/tb";
import { useState } from "react";
import { Switch, Group, useMantineTheme } from "@mantine/core";
import { RxCross2 } from "react-icons/rx";
import { CgCheck } from "react-icons/cg";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";

const ProductTable = () => {
  const theme = useMantineTheme();
  const [checked, setChecked] = useState(false);
  return (
    <div className="grid gap-4 w-full overflow-hidden">
      {/* <h1 className="text-title pb-4 text-2xl font-medium">Recent Order</h1> */}
      <div className="w-full overflow-x-scroll rounded-md">
        <table className="w-full whitespace-nowrap table-auto">
          <thead className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b border-gray-200  bg-gray-100">
            <tr>
              <td className="px-4 py-3 ">Product id</td>
              <td className="px-4 py-3 ">PRODUCT NAME</td>
              <td className="px-4 py-3 ">CATEGORY</td>
              <td className="px-4 py-3 ">PRICE</td>
              <td className="px-4 py-3 ">STOCK</td>
              <td className="px-4 py-3 ">STATUS</td>
              <td className="px-4 py-3 ">DISCOUNT</td>
              <td className="px-4 py-3 ">DETAILS</td>
              <td className="px-4 py-3 ">PUBLISHED</td>
              <td className="px-4 py-3 ">ACTIONS</td>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100 ">
            <tr className="">
              <td className="px-4 py-3">
                <span className="text-sm">Apr 4, 2023</span>
              </td>
              <td className="px-4 py-3">
                <span className="text-sm ">
                  Lahore cantt,Askari 10,Block D,House 452,Street 9
                </span>
              </td>
              <td className="px-4 py-3">
                <span className="text-sm">3rfrdg</span>
              </td>
              <td className="px-4 py-3">
                <span className="text-sm font-semibold">COD</span>
              </td>
              <td className="px-4 py-3">
                <span className="text-sm font-semibold">$33.00</span>
              </td>
              <td className="px-4 py-3">
                <span className="font-serif">
                  <span className="inline-flex px-2 text-xs font-medium leading-5 rounded-full text-green-600 bg-green-100">
                    Selling
                  </span>
                </span>
              </td>
              <td className="px-4 py-3">
                <span className="text-sm flex items-center justify-center font-semibold">
                  0%
                </span>
              </td>
              <td className="px-4 py-3">
                <Tooltip label="Details" color="blue" withArrow>
                  <span className="text-sub-title flex items-center justify-center font-semibold cursor-pointer hover:text-blue-400">
                    <TbListDetails size={18} />
                  </span>
                </Tooltip>
              </td>
              <td className="px-4 py-3">
                <span className="text-sm font-semibold">
                  <Group position="center">
                    <Switch
                      checked={checked}
                      onChange={(event) =>
                        setChecked(event.currentTarget.checked)
                      }
                      color="teal"
                      size="sm"
                      thumbIcon={
                        checked ? (
                          <CgCheck
                            size="0.8rem"
                            color={theme.colors.teal[theme.fn.primaryShade()]}
                            stroke={3}
                          />
                        ) : (
                          <RxCross2
                            size="0.8rem"
                            color={theme.colors.red[theme.fn.primaryShade()]}
                            stroke={3}
                          />
                        )
                      }
                    />
                  </Group>
                </span>
              </td>
              <td className="px-4 py-3">
                <div className="text-sm font-semibold flex justify-between text-sub-title items-center">
                  <Tooltip label="Edit" color="blue" withArrow>
                    <span className="cursor-pointer hover:text-blue-400">
                      <FiEdit size={16} />
                    </span>
                  </Tooltip>
                  <Tooltip label="Delete" color="red" withArrow>
                    <span className="cursor-pointer hover:text-red-400">
                      <RiDeleteBinLine size={16} />
                    </span>
                  </Tooltip>
                </div>
              </td>
            </tr>
            <tr className="">
              <td className="px-4 py-3">
                <span className="text-sm">Apr 4, 2023</span>
              </td>
              <td className="px-4 py-3">
                <span className="text-sm ">dfvsxdf</span>
              </td>
              <td className="px-4 py-3">
                {" "}
                <span className="text-sm">1478525874</span>{" "}
              </td>
              <td className="px-4 py-3">
                <span className="text-sm font-semibold">COD</span>
              </td>
              <td className="px-4 py-3">
                {" "}
                <span className="text-sm font-semibold">$182.00</span>{" "}
              </td>
              <td className="px-4 py-3">
                <span className="font-serif">
                  <span className="inline-flex px-2 text-xs font-medium leading-5 rounded-full text-green-600 bg-green-100">
                    Selling
                  </span>
                </span>
              </td>
              <td className="px-4 py-3">
                <span className="text-sm flex items-center justify-center font-semibold">
                  0%
                </span>
              </td>
              <td className="px-4 py-3">
                <Tooltip label="Details" color="blue" withArrow>
                  <span className="text-sub-title flex items-center justify-center font-semibold cursor-pointer hover:text-blue-400">
                    <TbListDetails size={18} />
                  </span>
                </Tooltip>
              </td>
              <td className="px-4 py-3">
                <span className="text-sm font-semibold">
                  <Group position="center">
                    <Switch
                      checked={checked}
                      onChange={(event) =>
                        setChecked(event.currentTarget.checked)
                      }
                      color="teal"
                      size="sm"
                      thumbIcon={
                        checked ? (
                          <CgCheck
                            size="0.8rem"
                            color={theme.colors.teal[theme.fn.primaryShade()]}
                            stroke={3}
                          />
                        ) : (
                          <RxCross2
                            size="0.8rem"
                            color={theme.colors.red[theme.fn.primaryShade()]}
                            stroke={3}
                          />
                        )
                      }
                    />
                  </Group>
                </span>
              </td>
              <td className="px-4 py-3">
                <div className="text-sm font-semibold flex justify-between text-sub-title items-center">
                  <Tooltip label="Edit" color="blue" withArrow>
                    <span className="cursor-pointer hover:text-blue-400">
                      <FiEdit size={16} />
                    </span>
                  </Tooltip>
                  <Tooltip label="Delete" color="red" withArrow>
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

export default ProductTable;
