import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Restaurant from "./assets/components/Restaurant";
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
				const response = await axios.get("https://site--deliveroo-backend--d4x522rwzwfd.code.run/");
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
				<Restaurant data={data} />
			</main>
		</>
	);
}

export default App;
