import React from "react";
import { Link } from "react-router-dom";

export const NotFoundComponent: React.FC = () => {
	return (
		<>
			<h2>404 - Page Not Found</h2>
			<p>Lo sentimos, la página que estás buscando no existe.</p>
			<Link to="/">Volver al inicio</Link>
		</>
	);
};
