import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
// import { nanoid } from "nanoid";
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faEnvelope, faKey, faListAlt } from '@fortawesome/free-solid-svg-icons';
// library.add(faEnvelope, faKey, faListAlt);

function App() {
	const [data, setData] = useState();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get("http://localhost:3000/");
				console.log("avant", response.data);
				setData(response.data);
				console.log("post set data", data);
				setIsLoading(false);
			} catch (error) {
				console.log(error.response); // contrairement au error.message d'express
			}
		};
		fetchData();
	}, []);

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
				<div className="container">
					<div className="restaurant-description">
						<h2>{data.restaurant.name}</h2>
						<p>{data.restaurant.description}</p>
					</div>
					<div className="restaurant-image">
						<img src={data.restaurant.picture} alt="image restaurant" />
					</div>
				</div>
				<div className="container">
					{data.categories.map((element) => {
						console.log("element1", element.meals);
						const id = element.name;
						return (
							<div className="categorie-master" key={id}>
								<h3>{element.name}</h3>
								<div>{element.meals.map(()=>{
                  console.log("element2", element.meals);
                })}
								</div>
							</div>
						);
					})}
				</div>
			</main>
		</>
	);
}

export default App;
