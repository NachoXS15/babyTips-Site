import { React, useState } from "react";
import "bootswatch/dist/morph/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Timer from "./components/Timer";

function App() {
  return(
    <div>
      <Timer />
      <Header />
      <Banner />
    </div>
  )
}

export default App;
