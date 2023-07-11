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
				console.log(error.response);
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
				<div className="description">
					<div className="container">
						<div className="restaurant-description">
							<h1>{data.restaurant.name}</h1>
							<p>{data.restaurant.description}</p>
						</div>
						<div className="restaurant-image">
							<img src={data.restaurant.picture} alt="image restaurant" />
						</div>
					</div>
				</div>
				<div className="bloc-container">
					<div className="menu">
						{data.categories.map((element) => {
							console.log("element1", element.meals);
							const id = element.name;
							return (
								<div className="categorie-master" key={id}>
									<h2>{element.name}</h2>
									<div className="line-meals">
										{element.meals.map((element) => {
											console.log("element2", element);
											return (
												<div className="meal" key={element.id}>
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
													{element.picture ? (
														<div className="meal-picture">
															<img src={element.picture} alt="photo repas" />
														</div>
													) : (
														""
													)}
												</div>
											);
										})}
									</div>
								</div>
							);
						})}
					</div>
					<div className="cart">
						<p>Panier</p>
					</div>
				</div>
			</main>
		</>
	);
}

export default App;
