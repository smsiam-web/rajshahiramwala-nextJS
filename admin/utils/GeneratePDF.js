import React from "react";
import { jsPDF, HTMLOptionImage } from "jspdf";
import { toPng, toCanvas } from "html-to-image";
// type props = {
//   html?: React.MutableRefObject<HTMLDivElement>,
// };

const GeneratePdf = ({ html }) => {
  const generatePdf = () => {
    const doc = new jsPDF();

    let image = document.getElementById("image").getAttribute("src");
    // get data
    let invoiceNo = doc.splitTextToSize(
      document.getElementById("invoiceNo").innerText,
      300
    );
    let name = doc.splitTextToSize(
      document.getElementById("name").innerText,
      200
    );
    let phone = doc.splitTextToSize(
      document.getElementById("phone").innerText,
      200
    );
    let address = doc.splitTextToSize(
      document.getElementById("address").innerText,
      200
    );
    // get item
    let item_01 = doc.splitTextToSize(
      document.getElementById("item_01").innerText,
      200
    );
    let item_01_quantity = doc.splitTextToSize(
      document.getElementById("item_01_quantity").innerText,
      200
    );
    let item_01_price = doc.splitTextToSize(
      document.getElementById("item_01_price").innerText,
      200
    );
    let item_01_total_price = doc.splitTextToSize(
      document.getElementById("item_01_total_price").innerText,
      200
    );
    // get item
    let item_02 = doc.splitTextToSize(
      document.getElementById("item_02").innerText,
      200
    );
    let item_02_quantity = doc.splitTextToSize(
      document.getElementById("item_02_quantity").innerText,
      200
    );
    let item_02_price = doc.splitTextToSize(
      document.getElementById("item_02_price").innerText,
      200
    );
    let item_02_total_price = doc.splitTextToSize(
      document.getElementById("item_02_total_price").innerText,
      200
    );
    // get item
    let item_03 = doc.splitTextToSize(
      document.getElementById("item_03").innerText,
      200
    );
    let item_03_quantity = doc.splitTextToSize(
      document.getElementById("item_03_quantity").innerText,
      200
    );
    let item_03_price = doc.splitTextToSize(
      document.getElementById("item_03_price").innerText,
      200
    );
    let item_03_total_price = doc.splitTextToSize(
      document.getElementById("item_03_total_price").innerText,
      200
    );

    let subTotal = doc.splitTextToSize(
      document.getElementById("subTotal").innerText,
      200
    );
    let shipping_type = doc.splitTextToSize(
      document.getElementById("shipping_type").innerText,
      200
    );
    let shipping_cost = doc.splitTextToSize(
      document.getElementById("shipping_cost").innerText,
      200
    );
    let discount = doc.splitTextToSize(
      document.getElementById("discount").innerText,
      200
    );
    let total = doc.splitTextToSize(
      document.getElementById("total").innerText,
      200
    );

    // doc.text(document.querySelector(".content > h1").innerHTML, 5, 75);
    doc.addImage(image, 0, 0, 210, 297);
    doc.text(invoiceNo, 43, 83.5);
    doc.text(name, 33, 91.4);
    doc.text(phone, 33.3, 99);
    doc.text(address, 36.4, 106.5);

    doc.text(item_01, 30, 139.6);
    doc.text(item_01_quantity, 116, 139.6);
    doc.text(item_01_price, 137, 139.6);
    doc.text(item_01_total_price, 168, 139.6);

    doc.text(item_02, 30, 154);
    doc.text(item_02_quantity, 116, 154);
    doc.text(item_02_price, 137, 154);
    doc.text(item_02_total_price, 168, 154);

    doc.text(item_03, 30, 167);
    doc.text(item_03_quantity, 116, 167);
    doc.text(item_03_price, 137, 167);
    doc.text(item_03_total_price, 168, 167);

    doc.text(subTotal, 161, 225.5);
    doc.text(shipping_type, 182, 233.8);
    doc.text(shipping_cost, 161, 233.8);
    doc.text(discount, 161, 242.2);
    doc.text(total, 161, 255.5);
    // doc.save("invoice.pdf");
    doc.output("dataurlnewwindow");
  };

  const generateImage = async () => {
    const image = await toPng(html.current, { quality: 0.95 });
    const doc = new jsPDF();

    doc.addImage(image, "JPEG", 0, 0, 310, 397);
    doc.save();
  };
  return (
    <div className="button-container">
      <button onClick={generateImage}>Get PDF using image</button>
      <button onClick={generatePdf}>Get PDF as text</button>
    </div>
  );
};

export default GeneratePdf;
