import Category from "./Category";


const Restaurant = (props) => {
	const { data, categoriesList } = props;
	// console.log("restau", data);
	// console.log("cat", categoriesList);


	return (
		<>
			<div className="description">
				<div className="container">
					<div className="restaurant-description">
						<h1>{data.restaurant.name}</h1>
						<p>{data.restaurant.description}</p>
					</div>
					<div className="restaurant-image">
						<img src={data.restaurant.picture} alt="restaurant" />
					</div>
				</div>
			</div>
			<div className="bloc-container">
				<div className="menu">
					{categoriesList.map((element) => {
						const id = element.name;
						return <Category element={element} key={id} />;
					})}
				</div>
				<div className="cart">
					<p>Panier</p>
				</div>
			</div>
		</>
	);
};

export default Restaurant;
