import { useState } from "react";
import Login from "./Modal/Login.jsx";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import cart from "./assets/cart.png";

import "./App.css";

function NavBar({ price, nombreArticle }) {
  const [openModal, setOpenModal] = useState(false);
  return (

    <div className=" Navbar bg-red-300 flex justify-between items-center " >
    <div className=" pl-4 flex items-center"><img src="./logo.png" alt="logo"/>
      <h1 className="text-2xl"><Link to="/"> HackaNoël</Link></h1>
    </div>
    <ul className="flex  ">
        <li className="p-3"> <Link to="/" >Accueil </Link> </li>
        <li className="p-3"> <Link to="/gift" >E-shop</Link></li>
         <li>
          {" "}
          <Link to="">Panier{nombreArticle}</Link>
        </li>
        <li>
          <img src={cart} className="cart" />
        </li>
        <li>
          {nombreArticle !== 1 && nombreArticle !== 0 ? "Articles" : "Article"} {price}€
        </li>
        <button
            type="button"
            onClick={() => {
              setOpenModal(true);
            }}
          >
            Connexion
          </button>
          {openModal && <div className="blur-background">
            (<Login closeModal={setOpenModal} />)
            </div>}
      </ul>
    </div>
  );
}
NavBar.propTypes = {
  price: PropTypes.number,
  nombreArticle: PropTypes.number,
};

export default NavBar;
