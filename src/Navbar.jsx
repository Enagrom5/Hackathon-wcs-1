import { useState } from "react";
import Login from "./Modal/Login.jsx";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import cart from "./assets/cart.png";

import "./App.css";

function NavBar({ price, numberArticle }) {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className=" Navbar flex justify-between items-center ">
      <div className=" pl-4 flex items-center">
        <img src="../logo.png" alt="logo" />
        <h1 className="text-2xl">
          <Link to="/"> HackaNoël</Link>
        </h1>
      </div>
      <ul className="flex items-center  mr-2 ">
        <li className="mr-2">
          <Link to="/">Accueil </Link>
        </li>
        <li className="mr-2">
          <Link to="/gift">E-shop</Link>
        </li>
        <li className="flex items-center mr-2">
          <button className="flex items-center">
            <Link to="">Panier{numberArticle}</Link>
            <img src={cart} className="cart" />
          </button>
        </li>
        <li className="flex items-center mr-2">
          {numberArticle > 1 ? "Articles" : "Article"} {price}€
        </li>
        <button
          className="flex items-center mr-2"
          type="button"
          onClick={() => {
            setOpenModal(true);
          }}
        >
          Connexion
        </button>
        {openModal && (
          <div className="blur-background">
            <Login closeModal={setOpenModal} />
          </div>
        )}
      </ul>
    </div>
  );
}
NavBar.propTypes = {
  price: PropTypes.number,
  numberArticle: PropTypes.number,
};

export default NavBar;
