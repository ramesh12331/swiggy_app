import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Body from "./components/Body";
import { Route, Routes } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import RestaurantMain from "./components/RestaurantMain";
import Banner from "./components/Banner";

const App = () => {
  return (
    <>
      <Navbar/>
      {/* <Hero/> */}
      <Routes>
        <Route path="/" element={<Body/>}/>
       
        <Route path="/restaurants/:resId" element={<RestaurantMenu/>} />
        
      </Routes>
      {/* <Banner/> */}
      
    </>
  );
};

export default App;
