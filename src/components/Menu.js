import { useEffect, useState } from "react";
import Header from "./Header";
import SearchForm from "./SearchForm";
import "./Menu.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedPdts, setPdts } from "../redux/actions/menuActions";

function Menu() {
  const navigate = useNavigate();
  const menuData = useSelector((state) => state.allPdts.products);
  const [menuItems, setMenuItem] = useState(menuData);
  const [sltData, setSltData] = useState({});
  const dispatch = useDispatch();

  const onMenuAddHandler = (e, param) => {
    if (param.count < 25) {
      setMenuItem((prevState) => {
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
      setMenuItem((prevState) => {
        const newState = prevState.map((obj) => {
          if (obj.id == param.id) {
            return { ...obj, count: param.count - 1 };
          }
          return obj;
        });
        return newState;
      });
    }
  };

  useEffect(() => {
    dispatch(setPdts(menuItems));
    let totSlt = menuItems.filter((ele) => ele.count > 0);
    setSltData(totSlt);
    dispatch(selectedPdts(totSlt));
  }, [menuItems]);

  const onChkoutHandler = () => {
    setTimeout(() => navigate("/order"), 2000);
  };

  return (
    <>
      <Header />
      <SearchForm />
      
 
      <section className="menu" id="menu">
        <h3 className="sub-heading">our menu</h3>
        <h1 className="heading">today's speciality</h1>
        <div className="box-container">
          {menuItems
            ? menuItems.map((item, index) => {
                return (
                  <div key={index} className="menu-box">
                    <div className="image">
                      <img src={item.img} alt="" />
                    </div>
                    <div className="content">
                      <div>
                        <h3>{item.name}</h3>
                        <div className="stars">
                          {Array.from(Array(item.star), (e, id) => {
                            return <i key={id} className="fas fa-star"></i>;
                          })}
                        </div>
                        <p>{item.describe}</p>
                      </div>
                      <div>
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
                    </div>
                    <span className="price">Rs {item.price}</span>
                  </div>
                );
              })
            : null}
        </div>
        <div className="chk-out-container">
          <button className="topup-btn" onClick={() => onChkoutHandler()}>
            Checkout
          </button>
        </div>
        <form action="">
          <label for="cars">Choose a variety:</label>
          <select id="cars" name="cars">
            <option value="volvo">Chinese</option>
            <option value="saab">Indian</option>
            <option value="mercedes">Italian</option>
            <option value="audi">Japanese</option>
          </select>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <input type="submit" value="Submit"></input>
        </form>

        {/* <div className="chinese"> */}
          {/* <h4>Chinese items here</h4>
          <img
            classmname="img"
            src="https://media.cnn.com/api/v1/images/stellar/prod/220921081426-04-chinese-foods-ziao-long-bao.jpg?c=original&q=h_618,c_fill"
            width="200"
            height="200"
          />

          <img
            classname="img"
            src="https://images.chinahighlights.com/allpicture/2014/08/703569837fea4a92834556bf_cut_800x500_9.jpg"
            width="200"
            height="200" */}
          {/* />/ */}
        {/* </div> */}

      </section>
      
    </>
  );
}

export default Menu;
