import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Headers.css";

export default function Header() {
  const navigate = useNavigate();
  const location = window.location.href.split("/").at(-1);
  const [count, setCount] = useState(0);
  const sltMenuItems = useSelector((state) => state.sltPdts.sltProducts);

  useEffect(() => {
    let cnt = 0;
    sltMenuItems &&
      sltMenuItems.map((item) => {
        cnt += item.count;
      });
    setCount(cnt);
  }, [sltMenuItems]);

  return (
    <header>
      <a href="" className="logo">
        <i className="fas fa-utensils" />
        resto.
      </a>
      <nav className="navbar">
        <button
          className={location == "" ? "nav-btn active" : "nav-btn"}
          onClick={() => {
            navigate("/");
          }}
        >
          home
        </button>

        <button
          className={location == "menu" ? "nav-btn active" : "nav-btn"}
          onClick={() => {
            navigate("/menu");
          }}
        >
          menu
        </button>
        {/* <button
          className={location == "order" ? "nav-btn active" : "nav-btn"}
          onClick={() => {
            navigate("/order");
          }}
        >
          Orders
        </button> */}
        <button
          className={location == "service" ? "nav-btn active" : "nav-btn"}
          onClick={() => {
            navigate("/service");
          }}
        >
          Service
        </button>
      </nav>
      <div className="icons">
        {/* <i
          className={location == "order" ? "fas fa-bars active" : "fas fa-bars"}
          id="menu-bars"
        /> */}
        <a
          className={
            location == "order"
              ? "fas fa-shopping-cart"
              : "fas fa-shopping-cart"
          }
          // onClick={() => navigate("/order")}
        />
        <span className="cart-count">{count}</span>
      </div>
    </header>
  );
}
