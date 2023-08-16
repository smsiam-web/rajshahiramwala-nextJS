import { Tooltip } from "@mantine/core";
import React, { use, useEffect, useState } from "react";
import { Modal } from "@mantine/core";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDisclosure, useElementSize } from "@mantine/hooks";
import Button from "../shared/Button";
import Link from "next/link";
import { useSelector } from "react-redux";
import { selectStaff } from "@/app/redux/slices/staffSlice";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  staff_role: Yup.string().required().label("Staff role"),
});

const StaffTable = ({ onClick }) => {
  const [staff, setStaff] = useState([]);
  const ourStaff = useSelector(selectStaff);

  useEffect(() => {
    setStaff(ourStaff);
  }, [ourStaff]);

  // useEffect(() => {
  //   setStaff(useSelector(selectStaff));
  // }, [useSelector(selectStaff)]);

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
            Are You Sure! Want to <span>FIRE!!!</span>
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
              {!!staff &&
                staff?.map((item) => (
                  <tr
                    className={`${
                      item.isFilter && "bg-blue-200 text-blue-600"
                    }`}
                    key={item.id}
                  >
                    <td className="px-4 py-3">
                      <Link
                        href={`/admin/our-staff/id=${item.id}`}
                        className="text-sm"
                      >
                        {item.id}
                      </Link>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-sm font-semibold">
                        {item.staff_details.staff_name}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-sm ">
                        {item.staff_details.staff_email}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-sm font-semibold uppercase">
                        {item.staff_details.staff_contact}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-sm font-semibold uppercase">
                        {new Date(item.timestamp).toLocaleDateString("en-US")}
                      </span>
                    </td>

                    <td className="px-4 py-3">
                      <span className="text-sm  bg-green-100 text-green-500 font-medium px-2 py-1 rounded-full">
                        {item.staff_details.staff_role}
                      </span>
                    </td>

                    <td className="px-4 py-3">
                      <div className="text-sm font-semibold flex justify-start gap-5 text-sub-title items-center">
                        <Tooltip label="Edit" color="blue" withArrow>
                          <Link
                            href={`/admin/our-staff/edit/id=${item.id}`}
                            className="text-sm"
                          >
                            <span className="cursor-pointer hover:text-blue-400">
                              <FiEdit size={16} />
                            </span>
                          </Link>
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
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default StaffTable;
