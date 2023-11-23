import data from "../data.json";
import Gift from "./gift";

function GiftList() {
  return (
    <div>
      {data.map((el) => (
        <li key={el.id}>
          <Gift data={el} />
        </li>
      ))}
    </div>
  );
}

export default GiftList;
