import { Tooltip } from "@mantine/core";
import React from "react";
import { TbListDetails } from "react-icons/tb";
import { useState } from "react";
import { Switch, Group, useMantineTheme } from "@mantine/core";
import { RxCross2 } from "react-icons/rx";
import { CgCheck } from "react-icons/cg";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import Link from "next/link";

const ProductTable = ({ onClick }) => {
  const theme = useMantineTheme();
  const [checked, setChecked] = useState(false);
  return (
    <div className="grid gap-4 w-full overflow-hidden">
      <div className="w-full overflow-x-scroll rounded-md">
        <table className="w-full whitespace-nowrap table-auto">
          <thead className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b border-gray-200  bg-gray-100">
            <tr>
              <td className="px-4 py-3 ">Product id</td>
              <td className="px-4 py-3 ">PRODUCT NAME</td>
              <td className="px-4 py-3 ">CATEGORY</td>
              <td className="px-4 py-3 ">PRICE</td>
              <td className="px-4 py-3 ">STOCK</td>
              <td className="px-4 py-3 ">DISCOUNT</td>
              <td className="px-4 py-3 ">DETAILS</td>
              <td className="px-4 py-3 ">PUBLISHED</td>
              <td className="px-4 py-3 ">ACTIONS</td>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100 ">
            <tr className="">
              <td className="px-4 py-3">
                <span className="text-sm">dsg4365d</span>
              </td>
              <td className="px-4 py-3">
                <span className="text-sm ">Mangoo</span>
              </td>
              <td className="px-4 py-3">
                <span className="text-sm">Mango</span>
              </td>
              <td className="px-4 py-3">
                <span className="text-sm font-semibold">299</span>
              </td>
              <td className="px-4 py-3">
                <span className="text-sm font-semibold">
                  <span className="inline-flex px-2 text-xs font-medium leading-5 rounded-full text-blue-600 bg-blue-100">
                    Avabile
                  </span>
                </span>
              </td>
              <td className="px-4 py-3">
                <span className="text-sm flex items-center justify-center font-semibold">
                  0% off
                </span>
              </td>
              <td className="px-4 py-3">
                <Link href={"/admin/products/id=?dasgfklad"}>
                  <Tooltip label="Details" color="blue" withArrow>
                    <span className="text-sub-title flex items-center justify-center font-semibold cursor-pointer hover:text-blue-400">
                      <TbListDetails size={18} />
                    </span>
                  </Tooltip>
                </Link>
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
                <div className="text-sm font-semibold flex justify-start gap-5 text-sub-title items-center">
                  <Tooltip
                    label="Edit"
                    color="blue"
                    withArrow
                    onClick={onClick}
                  >
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
