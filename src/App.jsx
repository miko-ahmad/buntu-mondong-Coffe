import { useState } from "react";

import './App.css'
import NavbarComp from "./components/NavbarComp";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CardCoffe from "./components/CardCoffe";
import Maps from "./components/Maps";
import Benefits from "./components/Benefits";
import Products from "./components/Products";

function App() {
  return (
    <main className=" ">

    <div className="  overflow-x-hidden bg-gray-100">
      <Header />
      {/* <NavbarComp /> */}
      <Hero />
      <Benefits />
      <Products />
      {/* <CardCoffe /> */}
      <Maps />
      <Footer />
    </div>
    </main>
  );
}

export default App;
