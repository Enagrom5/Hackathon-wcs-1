import { useState } from "react";
import Login from "./Modal/Login.jsx";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import cart from "./assets/cart.png";
import { IoCloseOutline, IoMenu } from "react-icons/io5";
import { useMediaQuery } from "@react-hook/media-query";
import { useHover } from "@uidotdev/usehooks";

import "./App.css";
import PlayingMusic from "./Music.jsx";

function NavBar({ price, numberArticle, carts }) {
  const [openModal, setOpenModal] = useState(false);
  const isMobile = useMediaQuery("only screen and (max-width: 639px)");

  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };

  const [iconMenu, setIconMenu] = useState(true);
  const toggleIconMenu = () => {
    setIconMenu(!iconMenu);
  };

  const [ref, hovering] = useHover();
  const display = hovering ? "flex" : "none";

  const newcarts = [...new Set(carts)]

  return (
    <div>
      {isMobile ? (
        <div>
          {iconMenu && (
            <IoMenu
              className="fixed top-[0.5rem] left-[0.5rem] text-[2rem] bg-amber-100 rounded-lg shadow-2xl p-[3px] cursor-pointer"
              onClick={() => {
                toggleMenu();
                toggleIconMenu();
              }}
            />
          )}
          {menu && (
            <div className="flex-col fixed w-[8rem] top-[0.5rem] left-[0.5rem] flex text-[2rem] bg-amber-100 rounded-lg shadow-2xl p-[3px]">
              <IoCloseOutline
                className="text-[#636262] text-2xl cursor-pointer mr-2"
                onClick={() => {
                  toggleMenu();
                  toggleIconMenu();
                }}
              />
              <ul className="flex-col space-y-7 mb-3 text-[13px] md:text-[15px] justify-center flex items-center ">
                <li>
                  <Link to="/">Accueil </Link>
                </li>
                <li>
                  <Link to="/gift">E-shop</Link>
                </li>
                <li className=" flex items-center mr-2">
                  <button className=" flex items-center">
                    <Link to="">Panier {numberArticle}</Link>
                  </button>
                  <img src={cart} className="cart h-[20px] md:h-[30px]" />
                </li>

                <li className="flex items-center  ">
                  {numberArticle > 1 ? "Articles" : "Article"} {price}€
                </li>
                <button
                  className="flex items-center "
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
          )}
        </div>
      ) : (
        <div className=" Navbar flex justify-between items-center ">
          <div className=" pl-4 flex items-center">
            <img src="../logo.png" alt="logo" className="h-[40px] mr-1" />
            <h1 className="text-[15px] md:text-2xl">
              <Link to="/"> HackaNoël</Link>
            </h1>
          </div>
          <ul className="text-[12px] md:text-[15px] flex items-center mr-2 ">
            <li className="mr-2">
              <Link to="/">Accueil </Link>
            </li>
            <li className="mr-2">
              <Link to="/gift">E-shop</Link>
            </li>
            <li ref={ref} className=" flex items-center mr-2">
              <button className=" flex items-center">
                <Link to="">Panier {numberArticle}</Link>
                <img src={cart} className="cart h-[20px] md:h-[30px]" />
              </button>
            </li>
            <li className="flex items-center mr-2 ml-2">
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
            <PlayingMusic />
          </ul>
        </div>
      )}
      <div className="cartdiv flex justify-center items-center flex-wrap" style={{ display }}>
        
          {newcarts.map((item) => (
            <div key={item} className="flex p-4">
                <h2 className="pr-4">{item.name}</h2>
              <img src={item.img} className="w-10 h-10" />
            </div>
          ))}
        
      </div>
    </div>
  );
}
NavBar.propTypes = {
  price: PropTypes.number,
  numberArticle: PropTypes.number,
  carts: PropTypes.array
};

export default NavBar;
