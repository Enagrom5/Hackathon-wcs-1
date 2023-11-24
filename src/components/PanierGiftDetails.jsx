import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function PanierGiftDetails() {
  const [gift, setGift] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  console.info(gift.img);

  useEffect(() => {
    const storageKeys = Object.keys(localStorage);

    const giftStorage = storageKeys.map((keyStorage) => {
      try {
        const gifts = JSON.parse(localStorage.getItem(keyStorage));
        return gifts;
      } catch (err) {
        console.error(
          `ERREUR: la méthode parse() n'a pas fonctionné à cause de la clé ${keyStorage}.`,
          err
        );
        return null;
      }
    });
    const giftValidation = giftStorage.filter((item) => item !== null);
    const giftSelect = giftValidation.find(
      (item) => item.id === parseInt(id, 10)
    );
    setGift(giftSelect || {});
  }, [id]);

  const handlePrevious = () => {
    const previousId = parseInt(id, 10) - 1;
    if (previousId >= 1) {
      navigate(`/panier/${previousId}`);
    }
  };

  const handleNext = () => {
    const nextId = parseInt(id, 10) + 1;
    if (nextId <= 15) {
      navigate(`/panier/${nextId}`);
    }
  };

  return (
    <div className="m-[100px] flex justify-center leading-[40px]">
      <div className="w-[800px] bg-amber-100 rounded-lg shadow-2xl px-[4rem] py-[1rem] md:p-[4rem]">
        {Object.keys(gift).length > 0 ? (
          <>
            <div key={gift.id}>
              <h1 className="text-center">{gift.name}</h1>
              <div className="flex justify-center">
                <img src={gift.img} alt={gift.name} />
              </div>
              <p>Prix: {gift.price}€</p>
              <p>
                Description: <br></br>
                {gift.description}
              </p>
            </div>
            <div className="mt-[2rem] md:mt-[5rem] flex gap-[1rem] md:justify-around">
              {gift.id > 1 && (
                <button
                  type="button"
                  onClick={handlePrevious}
                  className="px-[1rem] px-[.5rem] bg-white rounded-[0.3rem] duration-1000 hover:scale-110 hover:bg-slate-200"
                >
                  Précédent
                </button>
              )}
              <Link to="/panier">
                <button
                  type="button"
                  className="px-[1rem] px-[.5rem] bg-white rounded-[0.3rem] duration-1000 hover:scale-110 hover:bg-slate-200"
                >
                  Retour
                </button>
              </Link>
              {gift.id < 15 && (
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-[1rem] px-[.5rem] bg-white rounded-[0.3rem] duration-1000 hover:scale-110 hover:bg-slate-200"
                >
                  Suivant
                </button>
              )}
            </div>
          </>
        ) : (
          <p>Vous n'avez plus rien dans le panier</p>
        )}
      </div>
    </div>
  );
}

export default PanierGiftDetails;
