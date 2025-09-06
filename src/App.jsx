import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Body from "./components/Body";
import { Route, Routes } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import RestaurantMain from "./components/RestaurantMain";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import Cart from "./components/Cart";

const App = () => {
  return (
    <>
    <Provider store={appStore}>
      <Navbar />
      {/* <Hero/> */}
      <Routes>
        <Route path="/" element={<Body />} />

        <Route path="/restaurants/:resId" element={<RestaurantMenu />} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
      {/* <Banner/> */}
      <Footer />
    </Provider>
      
    </>
  );
};

export default App;
