const Cart = (props) => {
	const {
		cart,
		setCart,
		totalFacture,
		setTotalFacture,
		isDisplayed,
		setIsDisplayed,
	} = props;

	const frais_de_livraison = 2.5;

	const funcDisplayed = async () => {
		await setIsDisplayed(!isDisplayed);
	};

	const decrementOne = async (string) => {
		const newCart = [...cart];
		const index = newCart.findIndex((obj) => obj.name === string);
		if (newCart[index].quantity > 1) {
			newCart[index].quantity = newCart[index].quantity - 1;
			await setCart(newCart);
			let newTotal =
				parseFloat(totalFacture) - parseFloat(newCart[index].price);
			setTotalFacture(newTotal);
		} else {
			let newTotal =
				parseFloat(totalFacture) - parseFloat(newCart[index].price);
			setTotalFacture(newTotal);
			newCart.splice(index, 1);
			setCart(newCart);
		}
	};

	const incrementOne = async (string) => {
		const newCart = [...cart];
		const index = newCart.findIndex((obj) => obj.name === string);
		newCart[index].quantity = newCart[index].quantity + 1;
		await setCart(newCart);
		let newTotal = parseFloat(totalFacture) + parseFloat(newCart[index].price);
		setTotalFacture(newTotal);
	};

	return (
		<div className="two-cart">
			<div className="cart">
				<button className={`validate ${cart.length <= 0 ? "empty" : ""}`}>
					Valider mon panier
				</button>
				<div>
					{cart.map((element) => {
						return (
							<div key={element.name + element.quantity} className="facture">
								<div className="facture-line">
									<div className="quantity-name">
										<button
											className="plus-minus"
											onClick={() => {
												decrementOne(element.name);
											}}
										>
											-
										</button>
										<p>{element.quantity}</p>
										<button
											className="plus-minus"
											onClick={() => {
												incrementOne(element.name);
											}}
										>
											+
										</button>
										<p>{element.name}</p>
									</div>

									<p>{(element.price * element.quantity).toFixed(2)}€</p>
								</div>
							</div>
						);
					})}
				</div>
				<div>
					<div className="facture-line">
						<p>Sous-Total</p>
						<p>{totalFacture.toFixed(2)}</p>
					</div>
					<div className="facture-line">
						<p>Frais de livraison</p>
						<p>{frais_de_livraison}€</p>
					</div>
				</div>
				<div className="facture-line">
					<h3>Total</h3>
					<p className="total">
						{(totalFacture + frais_de_livraison).toFixed(2)}€
					</p>
				</div>
			</div>

			<div className="cart-mobile">
				<div className="cart-modale-closed">
				<button
					onClick={funcDisplayed}
					className={`open-modale ${
						isDisplayed ? "notDisplayed" : "displayed"
					}`}
				>
					Afficher mon panier
				</button>
				<p
					className={`close-modale ${
						isDisplayed ? "displayed" : "notDisplayed"
					}`}
					onClick={funcDisplayed}
				>
					x
				</p></div>
				<div className={isDisplayed ? "displayed" : "notDisplayed"}>
					<div className="cart-modale">
						<button className={`validate ${cart.length <= 0 ? "empty" : ""}`}>
							Valider mon panier
						</button>
						<div>
							{cart.map((element) => {
								return (
									<div
										key={element.name + element.quantity}
										className="facture"
									>
										<div className="facture-line">
											<div className="quantity-name">
												<button
													className="plus-minus"
													onClick={() => {
														decrementOne(element.name);
													}}
												>
													-
												</button>
												<p>{element.quantity}</p>
												<button
													className="plus-minus"
													onClick={() => {
														incrementOne(element.name);
													}}
												>
													+
												</button>
												<p>{element.name}</p>
											</div>

											<p>{(element.price * element.quantity).toFixed(2)}€</p>
										</div>
									</div>
								);
							})}
						</div>
						<div>
							<div className="facture-line">
								<p>Sous-Total</p>
								<p>{totalFacture.toFixed(2)}</p>
							</div>
							<div className="facture-line">
								<p>Frais de livraison</p>
								<p>{frais_de_livraison}€</p>
							</div>
						</div>
						<div className="facture-line">
							<h3>Total</h3>
							<p className="total">
								{(totalFacture + frais_de_livraison).toFixed(2)}€
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
