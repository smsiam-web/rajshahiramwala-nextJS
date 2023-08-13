import { Tooltip, LoadingOverlay } from "@mantine/core";
import React, { useEffect } from "react";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import { useState } from "react";
import { Modal, Select } from "@mantine/core";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import Link from "next/link";
import { db } from "@/app/utils/firebase";
import { notifications } from "@mantine/notifications";
import { useDispatch, useSelector } from "react-redux";
import { updateProductId } from "@/app/redux/slices/updateProductId";
import { selectOrder } from "@/app/redux/slices/orderSlice";
import FormHeader from "../shared/FormHeader";
import Button from "../shared/Button";
const STATUS = [
  { name: "Pending" },
  { name: "Processing" },
  { name: "OnTheWay" },
  { name: "ReadyToDeliver" },
  { name: "Deliverd" },
  { name: "Cancel" },
];

const OrderTable = ({ onClick }) => {
  const [loading, setLoading] = useState(false);
  const [filterOrder, setFilterOrder] = useState(null);
  const dispatch = useDispatch();
  const [orders, setOrders] = useState(useSelector(selectOrder));
  const [searchValue, onSearchChange] = useState("");
  const [opened, setOpened] = useState(false);

  const toggleOpen = () => {
    opened ? setOpened(false) : setOpened(true);
  };

  // update published state
  const UpdateOrderStatus = async (id, name) => {
    console.log(id, name);
    // const ref = db.collection("placeOrder").doc(id);
    // return ref
    //   .set(
    //     {
    //       order_status: name,
    //     },
    //     { merge: true }
    //   )
    //   .then(() => {
    //     values
    //       ? notifications.show({
    //           title: "Published successfully",
    //           message: `${name}, ID: ${id}`,
    //         })
    //       : notifications.show({
    //           title: "Removed successfully",
    //           message: `${name}, ID: ${id}`,
    //           color: "orange",
    //         });
    //   })
    //   .catch((error) => {
    //     notifications.show({
    //       title: "Somthing went Wrong",
    //       message: { error },
    //       color: "red ",
    //     });
    //     console.log(error);
    //   });
  };

  // Confirmation product from firebase
  const ConfirmationDelete = async (item) => {
    toggleOpen();
    setFilterOrder(item);
  };

  //after confirmaiton Delete porduct from firebase
  const DeleteProduct = async (item) => {
    await db
      .collection("placeOrder")
      .doc(item.id)
      .delete()
      .then(() => {
        notifications.show({
          title: "Delete successfully",
          message: `Customer Name ${item.order_details.customer_name}, Order ID: #${item.id}`,
          color: "orange",
        });
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
    toggleOpen();
    setFilterOrder(null);
  };

  return (
    <main>
      {/* confirmaiton pop-up */}
      <Modal
        opened={opened}
        withCloseButton={false}
        onClose={() => toggleOpen()}
        centered
      >
        <div className="p-2 rounded-lg">
          <FormHeader
            onClick={() => toggleOpen()}
            title={"Confirmation"}
            sub_title="Are you sure you want to Delete this order...!!!"
          />
          {/* confirmaiton pop-up  */}
          {filterOrder && (
            <div className="bg-gray-50 py-10">
              <div className="flex flex-col items-center gap-3">
                <div className="text-center">
                  <h1 className="text-2xl font-semibold text-title">
                    {filterOrder?.order_details.customer_name}
                  </h1>
                  <h1 className="text-xs text-title">
                    {filterOrder?.order_details.phone_number}
                  </h1>
                  <h1 className="text-sm text-title">
                    {filterOrder?.order_details.customer_address}
                  </h1>
                  <h1 className="text-base font-semibold text-title">
                    <span className="text-lg font-bold">#</span>
                    {filterOrder?.id}
                  </h1>
                </div>
                <div className="grid grid-cols-2 gap-6 mt-4">
                  <Button
                    onClick={() => toggleOpen()}
                    title="Cancel"
                    className="text-md bg-indigo-400 hover:bg-indigo-500 text-white px-8"
                  />
                  <Button
                    onClick={() => DeleteProduct(filterOrder)}
                    title="Delete"
                    className="text-md bg-red-500 hover:bg-red-600 text-white px-8"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </Modal>
      <div className="grid gap-4 w-full overflow-hidden ">
        <div className="w-full overflow-x-scroll rounded-md relative">
          {/* order table  */}
          <table className="w-full whitespace-nowrap table-auto">
            <thead className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b border-gray-200  bg-gray-100">
              <tr>
                <td className="px-4 py-3 ">invoice no</td>
                <td className="px-4 py-3 ">NAME</td>
                <td className="px-4 py-3 ">Phone no.</td>
                <td className="px-4 py-3 ">PRICE</td>
                <td className="px-4 py-3 ">address</td>
                <td className="px-4 py-3 ">DISCOUNT</td>
                <td className="px-4 py-3 ">status</td>
                <td className="px-4 py-3 ">invoice</td>
                <td className="px-4 py-3 ">ACTIONS</td>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100 ">
              {loading ? (
                <div className="h-40">
                  <LoadingOverlay visible={loading} overlayBlur={0.5} />
                </div>
              ) : (
                <>
                  {!!orders &&
                    orders?.map((item) => (
                      <tr className="" key={item.id}>
                        <td className="px-4 py-3">
                          <span className="text-sm">{item.id}</span>
                        </td>

                        <td className="px-4 py-3">
                          <span className="text-sm ">
                            {item.order_details?.customer_name}
                          </span>
                        </td>

                        <td className="px-4 py-3">
                          <span className="text-sm font-semibold">
                            {item.order_details?.phone_number}
                          </span>
                        </td>

                        <td className="px-4 py-3">
                          <span className="text-sm font-semibold">
                            {item.order_details?.cod_amount}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <span className="text-sm font-semibold">
                            <span className="inline-flex px-2 text-xs font-medium leading-5 rounded-full text-blue-600 bg-blue-100">
                              {item.order_details?.customer_address}
                            </span>
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <span className="text-sm flex items-center justify-center font-semibold">
                            tk
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <span className="text-sm w-52">
                            <Select
                              placeholder="Pending"
                              onSearchChange={onSearchChange}
                              data={[
                                "Pending",
                                "Processing",
                                "OnTheWay",
                                "ReadyToDeliver",
                                "Deliverd",
                                "Cancel",
                              ]}
                            />
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <Link href={`/admin/place-order/${item.id}`}>
                            <Tooltip label="Download" color="blue" withArrow>
                              <span className="text-sub-title flex items-center justify-center font-semibold cursor-pointer hover:text-blue-400">
                                <HiOutlineDocumentDownload size={18} />
                              </span>
                            </Tooltip>
                          </Link>
                        </td>

                        <td className="px-4 py-3">
                          <div className="text-sm font-semibold flex justify-start gap-5 text-sub-title items-center">
                            <Tooltip
                              label="Edit"
                              color="blue"
                              withArrow
                              onClick={() =>
                                dispatch(updateProductId({ id: item.id }))
                              }
                            >
                              <span className="cursor-pointer hover:text-blue-400">
                                <FiEdit size={16} />
                              </span>
                            </Tooltip>
                            <Tooltip label="Delete" color="red" withArrow>
                              <span
                                onClick={() => ConfirmationDelete(item)}
                                className="cursor-pointer hover:text-red-400"
                              >
                                <RiDeleteBinLine size={16} />
                              </span>
                            </Tooltip>
                          </div>
                        </td>
                      </tr>
                    ))}
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default OrderTable;
