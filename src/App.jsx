import { useState } from "react";

import './App.css'
import NavbarComp from "./components/NavbarComp";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import CardCoffe from "./components/CardCoffe";
import Maps from "./components/Maps";

function App() {
  return (
    <div className="font-sans text-neutral-800 bg-neutral-50">
      <NavbarComp />
      <Hero />
      <CardCoffe />
      <Maps />
      <Footer />
    </div>
  );
}

export default App;
