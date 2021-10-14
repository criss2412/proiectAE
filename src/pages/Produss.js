import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProdusContext } from "../context/Produss";

const Produss = () => {
	const { Produss } = useContext(ProdusContext);

	if (!Produss.length) {
		return <h3>Niciun produs nu este disponibil</h3>;
	}

	return (
		<section className="Produss">
			{Produss.length != 0 && <figure className="kitty" />}
			{Produss.map(({ image: image, id, title }) => (
				<article key={id} className="Produs">
					<div className="Produs-image">
						<img src={image} alt={title} />
					</div>
					<Link to={`produse/${id}`} className="btn Produs-link">
						detalii
					</Link>
				</article>
			))}
		</section>
	);
};

export default Produss;
