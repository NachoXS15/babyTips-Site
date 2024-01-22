import { React, useState } from "react";
import { Button } from "react-bootstrap";
import "./styles/App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Info from "./components/Info";
import Product from "./components/Product";
import Modules from "./components/modules/Modules";
import Degree from "./components/Degree";
import Testimonials from "./components/Testimonials";
import Bio from "./components/Bio";
import Buy from "./components/Buy";
function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Product />
      <Info />
      <Modules />
      <Testimonials />
      <Bio />
      <Buy />
      <Footer />
    </div>
  )
}

export default App;
