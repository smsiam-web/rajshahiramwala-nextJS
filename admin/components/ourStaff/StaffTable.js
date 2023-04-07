import { Tooltip } from "@mantine/core";
import React from "react";
import { Modal } from "@mantine/core";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDisclosure } from "@mantine/hooks";
import Button from "../shared/Button";

const StaffTable = ({ onClick }) => {
  // modals toggle
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        centered
        zIndex={99999}
        withCloseButton={false}
        size="lg"
        padding={0}
      >
        <div className="px-16 py-12 pb-0 flex flex-col items-center text-center gap-3">
          <span className="text-red-500">
            <RiDeleteBinLine size={50} />
          </span>
          <h1 className="text-2xl text-title">
            Are You Sure! Want to Delete{" "}
            <span className="text-primary">October Gift Voucher</span> Record?
          </h1>
          <p className="text-base pb-6">
            Do you really want to delete these records? You can't view this in
            your list anymore if you delete!
          </p>
        </div>
        <div className="bg-gray-50 w-full flex items-center justify-center gap-5 py-5">
          <Button
            onClick={close}
            title="No, keep it!"
            className="bg-green-500 outline-none hover:shadow-xl transition-all duration-300 font-normal text-white"
          />
          <Button
            title="Yes, Delete it!"
            className="text-gray-50 font-normal bg-red-400 hover:bg-red-500 hover:shadow-xl transition-all duration-300"
          />
        </div>
      </Modal>

      <div className="grid gap-4 w-full overflow-hidden">
        <div className="w-full overflow-x-scroll rounded-md">
          <table className="w-full whitespace-nowrap table-auto">
            <thead className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b border-gray-200  bg-gray-100">
              <tr>
                <td className="px-4 py-3 ">id</td>
                <td className="px-4 py-3 ">Name</td>
                <td className="px-4 py-3 ">Email</td>
                <td className="px-4 py-3 ">Contact</td>
                <td className="px-4 py-3 ">JOINING DATE</td>
                <td className="px-4 py-3 ">ROLE</td>
                <td className="px-4 py-3 ">ACTIONS</td>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100 ">
              <tr className="">
                <td className="px-4 py-3">
                  <span className="text-sm">2243D</span>
                </td>
                <td className="px-4 py-3">
                  <span className="text-sm font-semibold">
                    Syed Siam Chowdhury
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className="text-sm ">email@gmail.com</span>
                </td>
                <td className="px-4 py-3">
                  <span className="text-sm font-semibold uppercase">
                    +880 1722 166051
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className="text-sm font-semibold uppercase">
                    July 26, 2020
                  </span>
                </td>

                <td className="px-4 py-3">
                  <span className="text-sm flex items-center justify-start ">
                    Admin
                  </span>
                </td>

                <td className="px-4 py-3">
                  <div className="text-sm font-semibold flex justify-between text-sub-title items-center">
                    <Tooltip label="Edit" color="blue" withArrow>
                      <span
                        onClick={onClick}
                        className="cursor-pointer hover:text-blue-400"
                      >
                        <FiEdit size={16} />
                      </span>
                    </Tooltip>
                    <Tooltip label="Delete" color="red" withArrow>
                      <span
                        onClick={open}
                        className="cursor-pointer hover:text-red-400"
                      >
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
    </>
  );
};

export default StaffTable;
