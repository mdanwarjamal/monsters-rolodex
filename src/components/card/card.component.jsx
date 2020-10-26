import "./card.styles.css";

export const Card = ({ monster }) => (
  <div className="card-container">
    <h1>{monster.name}</h1>
    <img
      alt="Monster"
      src={`https://robohash.org/${monster.id}?set=set2&size=160x180`}
    />
    <p>{monster.email}</p>
  </div>
);
