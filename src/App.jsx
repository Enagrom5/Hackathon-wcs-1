import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useState } from "react";
import "./App.css";

function App() {
  const [price, setPrice] = useState(0);
  const [numberArticle,setNumberArticle]=useState(0)
  const [carts,setCarts]=useState([])
  return (
    <>

      <Navbar price={price} numberArticle={numberArticle} carts={carts} />
      <Outlet context={{price, setPrice, numberArticle,setNumberArticle,carts,setCarts}} />
      <Footer />
    </>
  );
}
export default App;
