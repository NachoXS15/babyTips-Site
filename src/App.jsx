import { React, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Timer from "./components/Timer";
import Footer from "./components/Footer";

function App() {
  return(
    <div>
      <Timer />
      <Header />
      <Banner />
      <Footer />
    </div>
  )
}

export default App;
