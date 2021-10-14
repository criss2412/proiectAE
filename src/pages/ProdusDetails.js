import React, { useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { ProdusContext } from "../context/Produss";
import { CartContext } from "../context/cart";

const ProdusDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const { Produss } = useContext(ProdusContext);
  const { addToCart } = useContext(CartContext);

  const Produs = Produss.find((Produs) => {
    return Produs.id === id;
  });
  if (!Produs) {
    return <h3>Loading...</h3>;
  }

  const { image: url, title, description, firma, price } = Produs;

  return (
    <section className="Produs-details">
      <div className="detail-image">
        <img src={url} alt="10x Rule" />
      </div>
      <div className="detail-description">
        <h2>{title}</h2>
        <p>{description}</p>
        <h3>{firma}</h3>
        <h4>Pret - {price} RON</h4>
        <button
          className="btn"
          onClick={() => {
            addToCart({ ...Produs, id });
            history.push("/cart");
          }}
        >
          Adauga In Cos
        </button>
      </div>
    </section>
  );
};

export default ProdusDetails;
