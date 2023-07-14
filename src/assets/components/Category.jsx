import Meal from "./Meal";

const Category = (props) => {
	const { element, cart, setCart, totalFacture, setTotalFacture} = props;

	return (
		<div className="categorie-master">
			<h2>{element.name}</h2>
			<div className="line-meals">
				{element.meals.map((element) => {
					return <Meal element={element} key={element.id} cart={cart} setCart={setCart} totalFacture={totalFacture} setTotalFacture={setTotalFacture} />;
				})}
			</div>
		</div>
	);
};

export default Category;
