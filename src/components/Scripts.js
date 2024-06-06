import React from "react";
import Service from "./Service";
import Header from "./Header";
import { chef } from "./chef";
import "./Service.css";

function Scripts() {
  return (
    <div>
      <Header />
      <div className="service-container">
        <h4 className="service-head">Cooks and Chefs for Home </h4>
        <span className="service-definition">
          Served 1lak people in various cities
        </span>
      </div>
      <div className="script-container">
        {chef.map((item, index) => (
          <Service key={index} chef={item} />
        ))}
      </div>
    </div>
  );
}
export default Scripts;
