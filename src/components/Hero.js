import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
	return (
		<section className="hero">
			<h2>Criss's Products</h2>
			<h3>
				Un dulap fara haine este ca <br />
				un corp fara suflet
			</h3>
			<Link className="btn" to="/produse">
				Vezi toate produsele
			</Link>
		</section>
	);
};

export default Hero;
