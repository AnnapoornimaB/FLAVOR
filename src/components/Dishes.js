import { useNavigate } from "react-router-dom";
import "./Dishes.css";

export default function Dishes() {
  const navigate = useNavigate();
  const dishes = [
    {
      name: "Burger",
      price: 130,
      star: 4,
      img: "images/dish-1.png",
    },
    {
      name: "Chicken Nuggets",
      price: 100,
      star: 3,
      img: "images/dish-2.png",
    },
    {
      name: "Choclate frapee",
      price: 99,
      star: 4,
      img: "images/dish-3.png",
    },
    {
      name: "choco truffle",
      price: 300,
      star: 5,
      img: "images/dish-4.png",
    },
    {
      name: "Ice fudge",
      price: 100,
      star: 4,
      img: "images/dish-5.png",
    },
    {
      name: "Egg Meal",
      price: 200,
      star: 5,
      img: "images/dish-6.png",
    },
  ];

  return (
    <section className="dishes" id="dishes">
      <h3 className="sub-heading">our dishes</h3>
      <h1 className="heading">popular dishes</h1>
      <div className="box-container">
        {dishes.map((item, index) => (
          <div key={index} className="box">
            <a onClick={() => navigate("/menu")} className="fas fa-eye"></a>
            <img src={item.img} className="menu-foods" alt="dish-1" />
            <h3>{item.name}</h3>
            <div className="stars">
              {Array.from(Array(item.star), (e, i) => {
                return <i key={i} className="fas fa-star"></i>;
              })}
            </div>
            <span>Rs {item.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
