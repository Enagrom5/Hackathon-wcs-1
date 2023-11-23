import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import cart from "./assets/cart.png";

import "./App.css";

function NavBar({ price, nombreArticle }) {
  return (
    <div className=" Navbar bg-red-600 flex justify-between ">
      <div>
        <h1>HackaNoël</h1>
      </div>
      <ul className="flex ">
        <li>
          {" "}
          <Link to="">Accueil </Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/gift">E-shop</Link>
        </li>
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
        <li>
          {" "}
          <Link to="">Connexion</Link>
        </li>
      </ul>
    </div>
  );
}
NavBar.propTypes = {
  price: PropTypes.number,
  nombreArticle: PropTypes.number,
};

export default NavBar;
