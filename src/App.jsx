import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Restaurant from "./assets/components/Restaurant";

function App() {
	const [cart, setCart] = useState([]);
	const [data, setData] = useState();
	const [isLoading, setIsLoading] = useState(true);
	const [categoriesList, setCategoriesList] = useState([]);

	
		const fetchData = async () => {
			try {
				const response = await axios.get(
					"https://site--deliveroo-backend--d4x522rwzwfd.code.run/"
				);
				setData(response.data);
				setCategoriesList(
					data.categories.filter((cat) => cat.meals.length > 0)
				);
				setIsLoading(false);
			} catch (error) {
				console.log(error.response);
			}
		};
		
		useEffect(() => {	fetchData();
	}, []);

	// console.log("data",data);
	// console.log("cat", data.categories)

	return isLoading ? (
		<span>En cours de chargement... </span>
	) : (
		<>
			<header>
				<div className="container">
					<img src="./src/assets/images/logo-teal.svg" alt="logo-deliveroo" />
				</div>
			</header>
			<main>
				<Restaurant data={data} categoriesList={categoriesList} cart={cart} setCart={setCart}/>
			</main>
		</>
	);
}

export default App;
