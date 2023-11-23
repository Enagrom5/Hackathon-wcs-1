import { useState } from "react";

function Gift({ data }) {
  const [add, setAdd] = useState();
  return (
    <div>
      <img src={data.img} alt={data.description} />
      <title>{data.name}</title>
      <p>{data.price} euro</p>
      <button type="button" onClick={() => setAdd(add)}>
        Add
      </button>
    </div>
  );
}

export default Gift;
