import Category from "./Category";
import Cart from "./Cart";


const Restaurant = (props) => {
	const { cart, setCart, data, categoriesList, totalFacture, setTotalFacture} = props;

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
						return <Category element={element} key={id} cart={cart} setCart={setCart} totalFacture={totalFacture} setTotalFacture={setTotalFacture} />;
					})}
				</div>
				<div className="sticky">
				<Cart cart={cart} setCart={setCart} totalFacture={totalFacture} setTotalFacture={setTotalFacture}/></div>
			</div>
		</>
	);
};

export default Restaurant;
