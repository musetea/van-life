import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const VanDetail = () => {
	const [van, setVan] = useState(null);
	const params = useParams();
	const { id } = params;

	useEffect(() => {
		if (!id) return;
		fetch(`/api/vans/${params.id}`)
			.then(response => response.json())
			.then(data => {
				const { vans } = data;
				console.log(vans);
				setVan(vans);
			});
	}, []);

	if (!van) return;

	return (
		<main>
			<h1>Van's Detail</h1>
			<h2>{van.name}</h2>
		</main>
	);
};
export default VanDetail;
