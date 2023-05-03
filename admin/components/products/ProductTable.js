import { Tooltip } from "@mantine/core";
import React, { useEffect } from "react";
import { TbListDetails } from "react-icons/tb";
import { useState } from "react";
import { Switch, Group, useMantineTheme } from "@mantine/core";
import { RxCross2 } from "react-icons/rx";
import { CgCheck } from "react-icons/cg";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import Link from "next/link";
import { db } from "@/app/utils/firebase";
import { notifications } from "@mantine/notifications";
import { useDispatch } from "react-redux";
import { updateProductId } from "../../../app/redux/slices/updateProductId";

const ProductTable = ({ onClick }) => {
  const theme = useMantineTheme();
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState(null);
  const dispatch = useDispatch();

  const toggleChecked = (id, name) => {
    products.map((item) => {
      if (item.id !== id) return;
      else {
        item.isPublished
          ? UpdatePublishedState(id, name, false)
          : UpdatePublishedState(id, name, true);
      }
    });
  };

  // update published state
  const UpdatePublishedState = async (id, name, values) => {
    const ref = db.collection("products").doc(id);
    return ref
      .set(
        {
          isPublished: values,
        },
        { merge: true }
      )
      .then(() => {
        values
          ? notifications.show({
              title: "Published successfully",
              message: `${name}, ID: ${id}`,
            })
          : notifications.show({
              title: "Removed successfully",
              message: `${name}, ID: ${id}`,
              color: "orange",
            });
      })
      .catch((error) => {
        notifications.show({
          title: "Somthing went Wrong",
          message: { error },
          color: "red ",
        });
        console.log(error);
      });
  };

  // Get orders from firebase
  useEffect(() => {
    setLoading(true);
    const unSub = db
      .collection("products")
      .orderBy("timestamp", "desc")
      .onSnapshot((snap) => {
        const product = [];
        snap.docs.map((doc) => {
          product.push({
            id: doc.id,
            ...doc.data(),
            timestamp: doc.data().timestamp.toDate().getTime(),
          });
        });
        // filter
        // const filterOrder = product.filter((item) => {
        //   const filterItem = [];
        //   if (item.user_details.uid !== user.uid) return;
        //   //
        //   filterItem.push(item);
        //   return filterItem;
        // });
        setProducts(product);
        setChecked(product.isPublished);
      });
    setLoading(false);
    return () => {
      unSub();
    };
  }, []);

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
              <td className="px-4 py-3 ">SALE PRICE</td>
              <td className="px-4 py-3 ">STOCK</td>
              <td className="px-4 py-3 ">DISCOUNT</td>
              <td className="px-4 py-3 ">DETAILS</td>
              <td className="px-4 py-3 ">PUBLISHED</td>
              <td className="px-4 py-3 ">ACTIONS</td>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100 ">
            {!!products &&
              products?.map((item) => (
                <tr className="" key={item.id}>
                  <td className="px-4 py-3">
                    <span className="text-sm">{item.id}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-sm ">
                      {item.product_details.product_name}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-sm">
                      {item.product_details.parent_category}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-sm font-semibold">
                      {item.product_details.price}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-sm font-semibold bg-green-100 text-green-600 px-3 py-1 rounded-full">
                      {item.product_details.sale_price}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-sm font-semibold">
                      <span className="inline-flex px-2 text-xs font-medium leading-5 rounded-full text-blue-600 bg-blue-100">
                        Available from {item.product_details.available_from}
                      </span>
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-sm flex items-center justify-center font-semibold">
                      {item.off_price}% Off
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <Link href={`/admin/products/${item.id}`}>
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
                          className="cursor-pointer"
                          checked={item.isPublished}
                          onChange={() =>
                            toggleChecked(
                              item.id,
                              item.product_details.product_name
                            )
                          }
                          color="teal"
                          size="sm"
                          thumbIcon={
                            item.isPublished ? (
                              <CgCheck
                                size="0.8rem"
                                color={
                                  theme.colors.teal[theme.fn.primaryShade()]
                                }
                                stroke={3}
                              />
                            ) : (
                              <RxCross2
                                size="0.8rem"
                                color={
                                  theme.colors.red[theme.fn.primaryShade()]
                                }
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
                        onClick={() =>
                          dispatch(updateProductId({ id: item.id }))
                        }
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
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;
