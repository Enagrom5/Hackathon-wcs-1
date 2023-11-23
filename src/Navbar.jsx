import "./App.css";

function NavBar() {
  return (
    <div className=" Navbar bg-red-600 flex justify-between " >
    <div>
      <h1>HackaNoël</h1>
    </div>
    <ul className="flex ">
        <li >Accueil</li>
        <li>E-shop</li>
        <li>Panier</li>
        <li>Connexion</li>
    </ul>
    </div>
  );
}

export default NavBar;
