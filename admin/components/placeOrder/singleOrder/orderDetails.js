import * as React from "react";
import dynamic from "next/dynamic";

const GeneratePDF = dynamic(() => import("../../../utils/GeneratePDF"), {
  ssr: false,
});
const orderDetails = () => {
  const ref = React.useRef();

  return (
    <div className="main">
      <div className="content bg-white" ref={ref}>
        <img
          id="image"
          src="/invoice.jpg"
          width="300"
          height="200"
          className="hidden"
        />
        <p id="invoiceNo">1001</p>
        <h1 id="name">Syed Siam Chowdhury</h1>
        <p id="phone">01722166051</p>
        <p id="address">Kazipara, Mirpur-10, Dhaka</p>

        <p id="item_01">Dana GUR</p>
        <p id="item_01_quantity">3kg</p>
        <p id="item_01_price">250.00/-</p>
        <p id="item_01_total_price">750.00/-</p>

        <p id="item_02">Jhola GUR</p>
        <p id="item_02_quantity">2kg</p>
        <p id="item_02_price">230.00/-</p>
        <p id="item_02_total_price">460.00/-</p>

        <p id="item_03">Patali GUR</p>
        <p id="item_03_quantity">4kg</p>
        <p id="item_03_price">260.00/-</p>
        <p id="item_03_total_price">1040.00/-</p>

        <p id="subTotal">2250.00/-</p>
        <p id="shipping_type">(Home)</p>
        <p id="shipping_cost">120.00/-</p>
        <p id="discount">-10%</p>
        <p id="total">2133.00/-</p>
      </div>
      <GeneratePDF html={ref} />
    </div>
  );
};

export default orderDetails;
