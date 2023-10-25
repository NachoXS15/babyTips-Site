import { React, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Timer from "./components/Timer";
import Footer from "./components/Footer";
import Info from "./components/Info";
import Product from "./components/Product";

function App() {
  return(
    <div>
      <Timer />
      <Header />
      <Banner />
      <Product />
      <Info />
      <Footer />
    </div>
  )
}

export default App;
