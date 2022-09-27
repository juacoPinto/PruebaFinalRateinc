import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";

const AppAdmin = () => {
	const [encuesta, setEncuesta] = useState({});

	const mostrarEncuestas = async () => {
		const respuesta = await axios.get("http://localhost:8080/api/encuesta");

		setEncuesta(respuesta.data);
	};

	useEffect(() => {
		mostrarEncuestas();
	}, []);

	const encuestasEnPantalla = Object.values(encuesta).map((encuesta) => {
		return (
			<div className="card" key={encuesta._id}>
				<div className="card-body">
					<h3> Nota: {encuesta.nota} </h3>
					<h6> Comentario: {encuesta.comentario}</h6>
				</div>
			</div>
		);
	});

	return (
		<Fragment>
			<h1>Panel Del Administrador</h1>
			<h3>Listado de encuestas realizadas: </h3>
			<div className="container">
				<div className="d-flex flex-row flex-wrap justify-content-between">
					{encuestasEnPantalla}
				</div>
			</div>
		</Fragment>
	);
};

export default AppAdmin;
