import React from "react";

import PriceOverview from "./PriceOverview";
import OrderOverview from "./OrderOverview";
import RecentOrder from "./RecentOrder";
import Percentage from "./Percentage";

const DashBoard = () => {
  return (
    <main className="h-full overflow-y-auto">
      <div>
        <h1 className="text-title text-2xl font-medium">Dashboard Overview</h1>
        <div>
          <div className="py-6 w-full">
            <PriceOverview />
          </div>
          <div className="py-6 w-full">
            <OrderOverview />
          </div>
          <div className="py-6 w-full">
            <Percentage />
          </div>
          <div className="py-6 w-64 md:w-full">
            <RecentOrder />
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashBoard;
