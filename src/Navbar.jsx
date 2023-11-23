import { Link } from "react-router-dom";
import "./App.css";

function NavBar() {
  return (
    <div className=" Navbar bg-red-600 flex justify-between " >
    <div>
      <h1>HackaNoël</h1>
    </div>
    <ul className="flex ">
        <li> <Link to="" >Accueil </Link> </li>
        <li> <Link to="/gift" >E-shop</Link></li>
        <li> <Link to="" >Panier</Link></li>
        <li> <Link to="" >Connexion</Link></li>
    </ul>
    </div>
  );
}

export default NavBar;
