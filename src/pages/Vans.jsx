import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CardVan = van => {
	console.log(van);
	return (
		<li key={van.id}>
			<Link to={`/vans/${van.id}`}>
				<img src={van.imageUrl} alt={van.name} />
				<div>
					<h3>{van.name}</h3>
					<p>
						${van.price}/<span>day</span>
					</p>
				</div>
				<i>{van.type}</i>
			</Link>
		</li>
	);
};

const Vans = () => {
	const [vans, setVans] = useState([]);
	useEffect(() => {
		fetch("/api/vans")
			.then(response => response.json())
			.then(data => {
				console.log(data.vans);
				setVans(data.vans);
			});
	}, []);
	console.log(vans);
	const vanItems = vans.map(van => {
		return CardVan(van);
	});

	return (
		<main>
			<h1>Explore Van's Options</h1>
			<ul>{vanItems}</ul>
		</main>
	);
};
export default Vans;
