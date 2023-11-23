import { Link } from "react-router-dom";
import { useState } from "react";
import data from "../../data/data.json";
import Gift from "./gift";

function GiftList() {
  const [filters, setFilters] = useState("");
 let array=[]
 for (let i =0; i<15;i++){
  array.push(data[i].categories)
 }
  const newArray=[...new Set(array)]

 
  return (
    <div className="E-shop ">
      <div className="flex justify-center items-center p-2">
      <h1>My Chrismast gift</h1>
      <form className="border-2 ml-2">
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
      </div>
      <div className="flex flex-wrap justify-center" > 
      {data
        .filter((el) => el.categories === filters || filters === "")
        .map((el) => (
          <div className="m-4 border-2 rounded " key={el.id}>
            <Link to={`/gift/${el.id}`}>
              <Gift data={el} />
            </Link>
            
          </div>
        ))}
        </div>
    </div>
  );
}

export default GiftList;
