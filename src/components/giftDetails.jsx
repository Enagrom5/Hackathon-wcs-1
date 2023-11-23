import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function giftDetails() {
  const [gift, setGift] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5173/gifts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setGift(data);
      })
      .catch((err) => {
        console.error("ERREUR : l'API gifts n'a pas pu être récupérée :", err);
      });
  }, [id]);

  const handlePrevious = () => {
    if (gift) {
      const previousId = gift.id - 1;
      window.location.href = `/gifts/${previousId}`;
    }
  };

  const handleNext = () => {
    if (gift) {
      const nextId = gift.id + 1;
      window.location.href = `/gifts/${nextId}`;
    }
  };

  return (
    <div>
      {gift && (
        <div key={gift.id}>
          <h1>{gift.name}</h1>
          <h3>{gift.id}</h3>
          <p>{gift.price}</p>
          <p>{gift.description}</p>
        </div>
      )}
      <div>
        {gift.id > 1 && (
          <button type="button" onClick={handlePrevious}>
            Précédent
          </button>
        )}
        <Link to="/shop">
          <button type="button">Retour</button>
        </Link>
        {gift.id < 27 && (
          <button type="button" onClick={handleNext}>
            Suivant
          </button>
        )}
      </div>
    </div>
  );
}

export default giftDetails;
