import React from "react";
import { Tabs, Badge } from "@mantine/core";
import { RingProgress, Group } from "@mantine/core";

const Percentage = () => {
  return (
    <div className="grid grid-cols-6 gap-4 w-full">
      <div className="col-span-6 md:col-span-3 bg-gray-50 p-4 rounded-md border border-gray-200 shadow">
        <h1 className="text-lg text-title font-medium">Weekly Sales</h1>
        <div>
          <Tabs defaultValue="gallery">
            <Tabs.List>
              <Tabs.Tab
                className="text-lg"
                value="gallery"
                rightSection={
                  <Badge
                    w={18}
                    h={18}
                    sx={{ pointerEvents: "none" }}
                    variant="filled"
                    size="md"
                    p={0}
                  >
                    6
                  </Badge>
                }
              >
                Sales
              </Tabs.Tab>
              <Tabs.Tab value="messages" className="text-lg">
                Orders
              </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="gallery" pt="xs">
              <div className="flex gap-2 my-3">
                <div className="bg-green-400 w-6 px-8 p-3"></div>
                <span>Sales</span>
              </div>
            </Tabs.Panel>

            <Tabs.Panel value="messages" pt="xs">
              <div className="flex gap-2 my-3">
                <div className="bg-primary w-6 px-8 p-3"></div>
                <span>Orders</span>
              </div>
            </Tabs.Panel>
          </Tabs>
        </div>
        <div className="flex flex-col gap-4"></div>
      </div>
      <div className="col-span-6 md:col-span-3 bg-gray-50 p-4 rounded-md border border-gray-200 shadow">
        <h1 className="text-lg text-title font-medium">
          Best Selling Products
        </h1>
        {/* <div className="grid grid-cols-4 gap-4 py-4">
          <div className="col-span-2 flex items-center gap-2">
            <div className="bg-green-400 px-4 py-2  h-fit"></div>
            <span>Sales</span>
          </div>
          <div className="col-span-2 flex items-center gap-2">
            <div className="bg-green-400 px-4 py-2  h-fit"></div>
            <span>Sales</span>
          </div>
          <div className="col-span-2 flex items-center gap-2">
            <div className="bg-green-400 px-4 py-2  h-fit"></div>
            <span>Sales</span>
          </div>
          <div className="col-span-2 flex items-center gap-2">
            <div className="bg-green-400 px-4 py-2  h-fit"></div>
            <span>Sales</span>
          </div>
        </div> */}
        <div>
          <Group position="center">
            <RingProgress
              size={430}
              thickness={130}
              sections={[
                { value: 20, color: "cyan", tooltip: "Documents – 40 Gb" },
                { value: 25, color: "orange", tooltip: "Apps – 25 Gb" },
                { value: 35, color: "grape", tooltip: "Other – 15 Gb" },
                { value: 20, color: "green", tooltip: "Other – 15 Gb" },
              ]}
            />
          </Group>
        </div>
      </div>
    </div>
  );
};

export default Percentage;
