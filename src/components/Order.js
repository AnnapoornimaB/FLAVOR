import React, { Component, useState } from 'react';
import { useSelector } from 'react-redux';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import Header from './Header';
import LastPageOrder from './LastPageOrders';
import './Order.css';

 // Correct import statement

function Order(props) {
  const sltMenuItems = useSelector((state) => state.sltPdts.sltProducts);
  const [showup, setShowup] = useState("order now");
  const [data, setData] = useState({
    name: "",
    mobile: "",
    address: "",
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

  const collegePosition = { lat: 9.1589, lng: 77.8664 }; // Coordinates for Kovilpatti National Engineering College

  return (
    <>
      <Header />
      <LastPageOrder />

      {/* <button class="nav-btn active">Payment</button> */}
      <section className="order" id="order">
        <h3 className="sub-heading"> order now </h3>
        <h1 className="heading"> Fill your details </h1>
        <form action="">
          <div className="inputbox">
            <div className="input">
              <span>your names</span>
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
              <span>your address</span>
              <textarea
                id="address"
                placeholder="enter your address"
                cols="30"
                rows="10"
                value={data.address}
                onChange={(e) => onChangeHandler(e)}
              ></textarea>
            </div>
            <div className="input">
              <span>Cooking Instruction's</span>
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
      <div className='App'>
        <h1>FlavorHub</h1>
        <Map
          google={props.google}
          zoom={15}
          initialCenter={collegePosition}
          style={{ width: '100%', height: '400px' }}
        >
          <Marker position={collegePosition} />
        </Map>
      </div>
      <div className="gpay">
        <img src="gpsy.jpg" width="400" height="400"></img>
      </div>
    </>
  );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDu7zX1RK1sAfbeLS9aNQ0timYvaImd8cI'
})(Order);
