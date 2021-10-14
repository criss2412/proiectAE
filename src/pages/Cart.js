import React, { useContext } from "react";
import { CartContext } from "../context/cart";
import { FiChevronUp } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";
import { useHistory } from "react-router-dom";

const Cart = () => {
	const history = useHistory();
	const { cart, total, increaseAmount, decreaseAmount } = useContext(CartContext);

	if (!cart.length) {
		return <h3>Cos de cumparaturi gol</h3>;
	}
	return (
		<section className="cart">
			<header>
				<h2>Cosul Meu</h2>
			</header>
			<div className="cart-wrapper">
				{cart.map(({ id, title, price, image, amount }) => (
					<article key={id} className="cart-item">
						<div className="image">
							<img src={image} alt="cart item" />
						</div>
						<div className="details">
							<p>{title}</p>
							<p>Ron {price}</p>
						</div>
						<div className="amount">
							<button onClick={() => increaseAmount(id)}>
								<FiChevronUp />
							</button>
							<p>{amount}</p>
							<button onClick={() => decreaseAmount(id, amount)}>
								<FiChevronDown />
							</button>
						</div>
					</article>
				))}
			</div>
			<div>
				<h3>Total: Ron {total}</h3>
			</div>
			<div>
				<button className="btn" onClick={() => history.push("/checkout")}>
					Checkout
				</button>
			</div>
		</section>
	);
};

export default Cart;
