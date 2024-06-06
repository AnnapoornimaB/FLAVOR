import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import BillSummary from "./BillSummary";
import "./LastPage.css";
import { selectedPdts } from "../redux/actions/menuActions";

const LastPageOrder = () => {
  const dispatch = useDispatch();
  const sltMenuItems = useSelector((state) => state.sltPdts.sltProducts);
  const [sltItems, setsltItem] = useState(sltMenuItems);

  useEffect(() => {
    dispatch(selectedPdts(sltItems));
  }, [sltItems])
  // const onPaymentHandler = () => {
  //   setTimeout(() => navigate("./Payment"), 2000);
  // };
  const onMenuAddHandler = (e, param) => {
    if (param.count < 25) {
      setsltItem((prevState) => {
        const newState = prevState.map((obj) => {
          if (obj.id == param.id) {
            return { ...obj, count: param.count + 1 };
          }
          return obj;
        });
        return newState;
      });
    }
  };

  const onMenuSubHandler = (e, param) => {
    if (param.count > 0) {
      setsltItem((prevState) => {
        const newState = prevState.map((obj) => {
          if (obj.id == param.id) {
            return { ...obj, count: param.count - 1 };
          }
          return obj;
        });
        return newState;
      });
    }

    // else {
    //   sltItems.splice(
    //     sltItems.findIndex((obj) => obj.id == param.id),
    //     1
    //   );
    //   setsltItem(sltItems);
    // }
  };

  return (
    <section className="menu" id="menu">
      <h1 className="heading">ITEM(S) ADDED</h1>
      <div className="box-container">
        <div className="chkoutFd-box">
          {sltItems ? (
            sltItems.map((item, index) => {
              return (
                <div className="Fd-container">
                  <div key={index} className="content">
                    <FontAwesomeIcon
                      className="chkd-icon fa-2x"
                      icon={faSquareCheck}
                    />
                    <div>
                      <h1>{item.name}</h1>
                      <span className="fi-price">Rs {item.price}</span>
                    </div>
                  </div>
                  <div className="pricing-container">
                    <div className="btn-container">
                      <button
                        className="topup-btn"
                        onClick={(e) => onMenuSubHandler(e, item)}
                      >
                        -
                      </button>
                      <span className="item-count">{item.count}</span>
                      <button
                        className="topup-btn"
                        onClick={(e) => onMenuAddHandler(e, item)}
                      >
                        +
                      </button>
                    </div>
                    <span className="fi-price">
                      Rs {item.count * item.price}
                    </span>
                  </div>
                </div>
              );
            })
          ) : (
            <h1 style={{ textAlign: "center" }}>purchase item's from menu</h1>
          )}
        </div>
        <BillSummary />
      </div>
      {/* <button  class="nav-btn active"><a href="Payment.js">Payment</a></button> */}
    </section>
  );
};

export default LastPageOrder;
