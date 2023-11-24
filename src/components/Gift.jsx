import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import { BsCartPlus, BsCartDash } from "react-icons/bs";

function Gift({ data }) {
  const { price, setPrice, setNumberArticle, carts, setCarts } =
    useOutletContext();

  const handlePanier = () => {
    setNumberArticle((prev) => prev + 1);
    setPrice(Math.round((price + data.price) * 100) / 100);
    let arr = carts;
    arr.push(data);
    setCarts(arr);

    const articleBasket = {
      name: data.name,
      img: data.img,
      description: data.description,
      id: data.id,
      price: data.price,
    };

    localStorage.setItem(data.id, JSON.stringify(articleBasket));
  };
  function panierdelete() {
    setNumberArticle((prev) => prev - 1);
    setPrice(Math.round((price - data.price) * 100) / 100);
    let arr = carts;
    arr.pop(data);
    setCarts(arr);

    localStorage.removeItem(data.id);
  }
  console.log(numberArticle);

  return (
    <>
      <div className="w-[20rem] h-[30rem] md:w-none md:h-none flex flex-col items-center justify-around">
        <img src={data.img} alt={data.description} className="rounded" />
        <h6 className="mt-[-2rem] text-[2rem] text-center mx-1">{data.name}</h6>
        <p className="mt-[-2rem] text-[1.4rem]"> {data.price}€</p>
        <div className="w-full flex direction-row justify-around mb-[0.5rem]">
          <button
            onClick={() => handlePanier()}
            className="border-2 w-12 h-12 text-[2rem] flex justify-center items-center rounded-md"
          >
            <BsCartPlus />
          </button>
          <button
            onClick={() => panierdelete()}
            className="border-2 w-12 h-12 text-[2rem] flex justify-center items-center rounded-md"
          >
            <BsCartDash />
          </button>
        </div>
        <Link to={`/gift/${data.id}`}>
          <p className="text-[0.8rem] text-slate-400 hover:text-slate-500">
            Cliquez ici pour obtenir davantage de détails
          </p>
        </Link>
      </div>
    </>
  );
}
Gift.propTypes = {
  price: PropTypes.number,
  setPrice: PropTypes.func,
  numberArticle: PropTypes.number,
  setNumberArticle: PropTypes.func,
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default Gift;
