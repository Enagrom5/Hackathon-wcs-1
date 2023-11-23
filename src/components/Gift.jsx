import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";


function Gift({ data, price, setPrice, numberArticle, setNumberArticle }) {
  
  function handlePanier(item) {
    setNumberArticle(numberArticle + 1);
    setPrice(Math.round((price + item.price) * 100) / 100);
  }
  function panierdelete(item) {
    setNumberArticle(numberArticle - 1);
    setPrice(Math.round((price - item.price) * 100) / 100);
  }
console.log(numberArticle)
  return (
    <>
    <div className="flex flex-col items-center justify-around">
      <Link to={`/gift/${data.id}`}>
        <img src={data.img} alt={data.description} />
      </Link>
      <title>{data.name}</title>
      <p>{data.price}€</p>
      <span>
        <button
          onClick={() => handlePanier()}
          className="border-2 w-6 h-6 rounded-md"
        >
          +
        </button>
        <button
          onClick={() => panierdelete()}
          className="border-2 w-6 h-6 rounded-md"
        >
          -
        </button>
      </span>
    </div>
      </>
  );
}
Gift.propTypes = {
  price: PropTypes.number,
  setPrice: PropTypes.func,
  numberArticle: PropTypes.number,
  setNumberArticle: PropTypes.func,
};

export default Gift;
