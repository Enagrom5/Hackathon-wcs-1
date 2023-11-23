import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

import "./App.css";

function App() {
  
  return (
    <>
      <Navbar prix={price} nombrePanier={numberArticle}/>
      <Outlet  />
      <Footer />
    </>
  );
}
export default App;
