import React from "react";
import SearchBy from "./SearchBy";
import DropDownload from "./DropDownload";
import ProductTable from "./ProductTable";
import AddProduts from "./add_products";
import { Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

const Products = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <main className="h-full overflow-y-auto">
      <div>
        <Drawer
          opened={opened}
          onClose={close}
          zIndex={9999999}
          withCloseButton={false}
          position="right"
          size="xl"
          padding={0}
        >
          <div className="">
            <AddProduts onClick={close} />
          </div>
        </Drawer>
      </div>
      <div className="grid mx-auto">
        <h1 className="text-2xl pb-5 font-bold text-gray-700">Products</h1>
        <SearchBy onClick={open} />
        <DropDownload />
        <ProductTable onClick={open} />
      </div>
    </main>
  );
};

export default Products;
