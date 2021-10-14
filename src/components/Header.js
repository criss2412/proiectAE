import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className="main-head">
			<nav>
				<h1 id="logo">Criss's Store</h1>
				<ul>
					<li>
						<Link to="/">Acasa</Link>
					</li>
					<li>
						<Link to="/produse">Produse</Link>
					</li>
					<li>
						<Link to="/cart">Cart</Link>
					</li>
					<li>
						<Link to="/checkout">Checkout</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
