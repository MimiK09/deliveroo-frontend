const Meal = (props) => {
	const { element, cart, setCart } = props;

	const addMeal = () => {
		const newCart = [...cart];
		let obj = {};
		obj.name = element.title;
		obj.quantity = 1;
		obj.price = element.price;
		console.log("test", obj);
		newCart.push(obj);
		setCart(newCart);
	};
	console.log("cart", cart);

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
