import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useState } from "react";
import "./App.css";


function App() {
  const [numberArticle, setNumberArticle] = useState(0);
  const [price, setPrice] = useState(0);
  return (
    <>
      <Navbar prix={price} nombrePanier={numberArticle} />

      <Outlet context={[price, setPrice][numberArticle, setNumberArticle]} />
      <Footer />
    </>
  );
}
export default App;
