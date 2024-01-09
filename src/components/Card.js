import "./Card.css";

export default function Card({ name, color, price, reason }) {
  console.log(name);
  return (
    <article className={name === "Banana" ? "card--green" : "card--red"}>
      <h2>{name}</h2>
      <p>{color}</p>
      <p>{price}</p>
      <p>{reason}</p>
    </article>
  );
}
