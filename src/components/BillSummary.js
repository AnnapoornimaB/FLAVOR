import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import "./BillSummary.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function BillSummary() {
  const sltdItems = useSelector((state) => state.sltPdts.sltProducts);
  console.log("sltdItems", sltdItems);
  const [totalPrice, setTotalPrice] = useState(2);

  useEffect(() => {
    console.log("called");
    let priceValue = 2;
    sltdItems &&
      sltdItems.forEach((item) => (priceValue += item.count * item.price));

    setTotalPrice((prev) => priceValue);
  }, [sltdItems]);

  return (
    <>
      <h1 className="heading">BILL SUMMARY</h1>
      <div className="box-sub-container">
        <div className="subtotal-container">
          <div className="subtotal-info">
            <span>Subtotal</span>
            <p>includes ₹2 Feeding Indian donation</p>
          </div>
          <span className="subtotal-price">₹{totalPrice}</span>
        </div>
        <div className="delivery-container">
          <div className="delivery-info">
            <span>Delivery partner fee for 5km (incl surge)</span>
            <p>goes to them for their time and effort</p>
          </div>
          <span className="subtotal-price">₹44</span>
        </div>
        <hr />
        <div className="final-container">
          <div className="final-info">
            <span>Grand Total</span>
          </div>
          <span className="grand-price">₹{totalPrice + 44}</span>
        </div>
      </div>
      <div className="box-sub-container">
        <div className="delivNote-container">
          <span>Delivery option - Cash on delivery is only available</span>
          <p>pay to our delivery person on receiving order.</p>
          <div className="delivery-call">
            <FontAwesomeIcon icon={faPhone} />
            <p>
              Our executive will call to check the order and delivery
              confirmation.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
