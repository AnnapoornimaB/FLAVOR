import "./App.css";
import { BrowserRouter as WebRouter, Routes, Route } from "react-router-dom";
//import { useState } from "react";
//import Header from "./components/Header";
import Menu from "./components/Menu";
import Order from "./components/Order";
//import SearchForm from "./components/SearchForm";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Login from "./Login";
import Signup from "./Signup";
//import Service from "./components/Service";
import Scripts from "./components/Scripts";
import Reservation from "./components/Reservation";
import Chat from "./component/Chat";




function App() {
//  const [isAuthenticated,SetIsAuthenticated]=useState(false);
  return (
    <>
      <WebRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/menu" element={<Menu />}></Route>
          <Route exact path="/login" element={<Login/>}></Route>
          <Route exact path="/signup" element={<Signup/>}></Route>
          <Route exact path="/order" element={<Order />}></Route>
          <Route exact path="/service" element={<Scripts />}></Route>
          <Route exact path="/reservation" element={<Reservation />}></Route>
          <Route exact path="/chat" element={<Chat />}></Route>

          <Route>404 not found!</Route>
        </Routes>
      </WebRouter>
      <Footer />
    </>
    
  );
}

export default App;
