import Header from "./Header";
import LastPageOrder from "./LastPageOrders";
import { useSelector } from "react-redux";
import "./Order.css";
import { useState } from "react";

export default function Reservation() {
  const sltMenuItems = useSelector((state) => state.sltPdts.sltProducts);
  const [showup, setShowup] = useState("order now");
  const [data, setData] = useState({
    name: "",
    mobile: "",
    address: "",
    date: "",
    event: "",
    instruction: "",
  });

  const style = {
    float: "right",
    fontSize: "1.4rem",
    fontWeight: "700",
    color: "#666",
    textTransform: "lowercase",
  };

  const styler = {
    background: "#27ae60",
  };

  const onOrderHandler = () => {
    if (
      sltMenuItems &&
      data.name &&
      data.mobile &&
      data.address &&
      data.instruction
    ) {
      setShowup("ordered");
    }
  };

  const onChangeHandler = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  return (
    <>
      <Header />
      <section className="order" id="order" style={{ marginTop: "5rem" }}>
        <h3 className="sub-heading"> Book your chef </h3>
        <h1 className="heading"> Fill the details </h1>
        <form action="">
          <div className="inputbox">
            <div className="input">
              <span>your name</span>
              <input
                id="name"
                type="text"
                placeholder="enter your name"
                value={data.name}
                onChange={(e) => onChangeHandler(e)}
              />
            </div>
            <div className="input">
              <span>your number </span>
              <input
                id="mobile"
                type="number"
                placeholder="enter your number"
                value={data.mobile}
                onChange={(e) => onChangeHandler(e)}
              />
            </div>
          </div>
          <div className="inputbox">
            <div className="input">
              <span>Select Date</span>
              <input
                id="date"
                type="date"
                placeholder="what's the date"
                value={data.date}
                onChange={(e) => onChangeHandler(e)}
              />
            </div>
            <div className="input">
              <span>What time you need us to be available AM/PM</span>
              <input
                id="occasion"
                type="text"
                placeholder="enter your timing"
                value={data.occasion}
                onChange={(e) => onChangeHandler(e)}
              />
            </div>
            <div className="input">
              <span>What Event(mention the occasion)</span>
              <input
                id="event"
                type="text"
                placeholder="special event or normal day"
                value={data.event}
                onChange={(e) => onChangeHandler(e)}
              />
            </div>
          </div>
          <div className="inputbox">
            <div className="input">
              <span>your address</span>
              <textarea
                id="address"
                type="text"
                placeholder="enter your address"
                value={data.address}
                onChange={(e) => onChangeHandler(e)}
              ></textarea>
            </div>
            <div className="input">
              <span>Item's to Cook</span>
              <textarea
                id="instruction"
                placeholder="enter your message"
                cols="30"
                rows="10"
                value={data.instruction}
                onChange={(e) => onChangeHandler(e)}
              ></textarea>
            </div>
          </div>
          <div>
            <input
              type="button"
              style={showup == "ordered" ? styler : {}}
              value={showup}
              className="btn"
              onClick={onOrderHandler}
            />
            {showup == "ordered" && (
              <span style={style}>
                *our executive will call for order confirmation
              </span>
            )}
          </div>
        </form>
      </section>
    </>
  );
}
