import { Link } from "react-router-dom";
import { useState } from "react";
import data from "../../data/data.json";
import Gift from "./gift";

function GiftList(numberArticle, setNumberArticle,price,setPrice) {
  const [filters, setFilters] = useState("");
  let array = [];
  for (let i = 0; i < 15; i++) {
    array.push(data[i].categories);
  }
  const newArray = [...new Set(array)];

  return (
    <>
      <h1>My Chrismast gift</h1>
      <form>
        <label htmlFor="select-gift">
          <select id="select-gift" onChange={(e) => setFilters(e.target.value)}>
            <option value="">----</option>
            {newArray.map((acces) => {
              return (
                <option key={acces.id} value={acces.id}>
                  {acces}
                </option>
              );
            })}
          </select>
        </label>
      </form>
      {data
        .filter((el) => el.categories === filters || filters === "")
        .map((el) => (
          <li key={el.id}>
            <Link to={`/gift/${el.id}`}>
              <Gift
                data={el}
                price={price}
                setPrice={setPrice}
                numberArticle={numberArticle}
                setNumberArticle={setNumberArticle}
              />
            </Link>
          </li>
        ))}
    </>
  );
}

export default GiftList;
