import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";

import { ProdusContext } from "../context/Produss";
const Home = () => {
	const { featured } = useContext(ProdusContext);
	if (!featured.length) {
		return <h3>Niciun produs nu este valabil</h3>;
	}
	return (
		<>
			<Hero />
			<section className="featured">
				<header className="featured-head">
					<h3>Colectie Noua</h3>
				</header>
				<div className="Produss featured-list">
					{featured.map(({ id, image, title }) => (
						<article key={id} className="Produs featured-Produs">
							<div className="Produs-image">
								<img src={image} alt={title} />
							</div>
							<Link to={`produse/${id}`} className="btn Produs-link">
								detalii
							</Link>
						</article>
					))}
				</div>
			</section>
		</>
	);
};

export default Home;
