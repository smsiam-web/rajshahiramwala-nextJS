import { Tooltip } from "@mantine/core";
import React from "react";
import { TbListDetails } from "react-icons/tb";
import { useState } from "react";
import { Switch, Group, useMantineTheme } from "@mantine/core";
import { RxCross2 } from "react-icons/rx";
import { CgCheck } from "react-icons/cg";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";

const CategoryItem = () => {
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
              <td className="px-4 py-3 ">Icon</td>
              <td className="px-4 py-3 ">PARENT</td>
              <td className="px-4 py-3 ">CHILDREN</td>
              <td className="px-4 py-3 ">TYPE</td>
              <td className="px-4 py-3 ">PUBLISHED</td>
              <td className="px-4 py-3 ">ACTIONS</td>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100 ">
            <tr className="">
              <td className="px-4 py-3">
                <span className="text-sm">23232D</span>
              </td>
              <td className="px-4 py-3">
                <span className="text-sm ">Icon</span>
              </td>
              <td className="px-4 py-3 flex items-center justify-start gap-2">
                <span className="inline-flex px-2 text-xs font-medium leading-5 rounded-full text-gray-600 bg-gray-200">
                  Food
                </span>
                <span className="inline-flex px-2 text-xs font-medium leading-5 rounded-full text-gray-600 bg-gray-200">
                  Fruite
                </span>
              </td>

              <td className="px-4 py-3">
                <span className="font-serif">
                  <span className="text-base flex items-center justify-center font-medium">
                    2
                  </span>
                </span>
              </td>
              <td className="px-4 py-3">
                <span className="text-sm flex items-center justify-center font-medium">
                  Foods
                </span>
              </td>
              <td className="px-4 py-3 flex items-center justify-start">
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
                <div className="text-sm font-semibold flex justify-start gap-5 text-sub-title items-center">
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
                <span className="text-sm">23232D</span>
              </td>
              <td className="px-4 py-3">
                <span className="text-sm ">Icon</span>
              </td>
              <td className="px-4 py-3 flex items-center justify-start gap-2">
                <span className="inline-flex px-2 text-xs font-medium leading-5 rounded-full text-gray-600 bg-gray-200">
                  Food
                </span>
                <span className="inline-flex px-2 text-xs font-medium leading-5 rounded-full text-gray-600 bg-gray-200">
                  Fruite
                </span>
              </td>

              <td className="px-4 py-3">
                <span className="font-serif">
                  <span className="text-base flex items-center justify-center font-medium">
                    2
                  </span>
                </span>
              </td>
              <td className="px-4 py-3">
                <span className="text-sm flex items-center justify-center font-medium">
                  Foods
                </span>
              </td>
              <td className="px-4 py-3 flex items-center justify-start">
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
                <div className="text-sm font-semibold flex justify-start gap-5 text-sub-title items-center">
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

export default CategoryItem;
