const Meal = (props) => {
	const { element, cart, setCart, totalFacture, setTotalFacture, isDisplayed, setIsDisplayed } = props;

	const addMeal = () => {
		const newCart = [...cart];
		const index = newCart.findIndex((obj) => obj.name === element.title);
		if (index === -1) {
			console.log("test", totalFacture);
			const obj = {};
			obj.name = element.title;
			obj.quantity = 1;
			obj.price = element.price;
			newCart.push(obj);
			setCart(newCart);
			let newTotal = parseFloat(totalFacture) + parseFloat(element.price);
			setTotalFacture(newTotal);

			console.log("test2", totalFacture);
		} else {
			newCart[index].quantity = newCart[index].quantity + 1;
			setCart(newCart);
			let newTotal = parseFloat(totalFacture) + parseFloat(element.price);
			setTotalFacture(newTotal);
		}
	};

	return (
		<div className="meal" onClick={addMeal}>
			<div className="meal-description">
				<h3>{element.title}</h3>
				<div className="meal-detail">
					<p>{element.description}</p>
				</div>
				<div className="price-pop">
					<p>{element.price}€</p>
					{element.popular ? (
						<>
							<div className="popular">
								<i className="icon-STAR_FILL"></i>
								<p>Populaire</p>
							</div>
						</>
					) : (
						""
					)}
				</div>
			</div>
			{props.element.picture ? (
				<div className="meal-picture">
					<img src={props.element.picture} alt="repas" />
				</div>
			) : (
				""
			)}
		</div>
	);
};

export default Meal;
