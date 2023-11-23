import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import data from "../../data/data.json";

function GiftDetails() {
  const [gift, setGift] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  console.info(gift.img);

  useEffect(() => {
    const giftItem = data.find((item) => item.id === parseInt(id));
    setGift(giftItem);
  }, [id]);

  const handlePrevious = () => {
    const previousId = parseInt(id) - 1;
    if (previousId >= 1) {
      navigate(`/gift/${previousId}`);
    }
  };

  const handleNext = () => {
    const nextId = parseInt(id) + 1;
    if (nextId <= 15) {
      navigate(`/gift/${nextId}`);
    }
  };

  return (
    <>
      <div>
        <div key={gift.id}>
          <h1>{gift.name}</h1>
          <h3>{gift.id}</h3>
          <img src={gift.img} alt={gift.name} />
          <p>{gift.price} euro</p>
          <p>{gift.description}</p>
        </div>
        <div>
          {gift.id > 1 && (
            <button type="button" onClick={handlePrevious}>
              Précédent
            </button>
          )}
          <Link to="/gift">
            <button type="button">Retour</button>
          </Link>
          {gift.id < 15 && (
            <button type="button" onClick={handleNext}>
              Suivant
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default GiftDetails;
