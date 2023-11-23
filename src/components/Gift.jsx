import PropTypes from "prop-types";

function Gift({ data, price, setPrice, numberArticle, setNumberArticle }) {
  function handlePanier(item) {
    setNumberArticle(numberArticle + 1);
    setPrice(Math.round((price + item.price) * 100) / 100);
  }

  return (
    <div>
      <img src={data.img} alt={data.description} />
      <title>{data.name}</title>
      <p>{data.price}</p>
      <button onClick={() => handlePanier()}>Ajouter au Panier</button>
    </div>
  );
}
Gift.propTypes = {
  price: PropTypes.number,
  setPrice: PropTypes.func,
  numberArticle: PropTypes.number,
  setNumberArticle: PropTypes.func,
};

export default Gift;
