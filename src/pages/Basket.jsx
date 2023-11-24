import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsCartDash } from "react-icons/bs";

function Basket() {
  const [articleBasket, setArticleBasket] = useState([]);

  useEffect(() => {
    const storageKeys = Object.keys(localStorage);

    const articleStorage = storageKeys.map((key) => {
      try {
        const article = JSON.parse(localStorage.getItem(key));
        return article;
      } catch (err) {
        console.error(
          `ERREUR: la méthode parse() n'a pas fonctionné à cause de la clé ${key}.`,
          err
        );
        return null;
      }
    });
    const articleValidation = articleStorage.filter((item) => item !== null);
    setArticleBasket(articleValidation);
  }, []);

  const panierDelete = (id) => {
    localStorage.removeItem(id);

    setArticleBasket(articleBasket.filter((article) => article.id !== id));
  };

  return (
    <>
      <h1 className="mt-[2rem] md:mt-[2rem] text-[2rem] text-center">
        Mon Panier
      </h1>
      <div className="E-shop md:mt-none md:mt-[0.5rem] flex flex-row items-center mb-20 md:mb-20">
        <div className="flex justify-center items-center p-2 w-full">
          <div className="flex flex-wrap justify-center items-center">
            {articleBasket.map((article) => (
              <div
                key={article.id}
                className="m-4 border-2 border-amber-200 rounded-md shadow-2xl "
              >
                <div className="w-[20rem] h-[30rem] md:w-none flex flex-col items-center justify-around">
                  <img src={article.img} alt={article.description} />
                  <h6 className="mt-[1rem] sm:mt-[-2rem] md:mt-[0] text-[2rem] text-center mx-1">
                    {article.name}
                  </h6>
                  <p className="mt-[0rem] md:mt-[0] text-center text-[1.4rem]">
                    {" "}
                    {article.price}€
                  </p>
                  <div className="w-full flex direction-row justify-around mt-[1rem] md:mt-[0rem] mb-[0.5rem]">
                    <button
                      onClick={() => panierDelete(article.id)}
                      className="border-2 w-12 h-12 text-[2rem] flex justify-center items-center rounded-md"
                    >
                      <BsCartDash />
                    </button>
                  </div>
                  <Link to={`/panier/${article.id}`}>
                    <p className="text-[0.8rem] text-slate-400 hover:text-slate-500">
                      Cliquez ici pour obtenir davantage de détails
                    </p>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Basket;
