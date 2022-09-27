import axios from "axios";
import React, { Fragment } from "react";

const AppAdmin = () => {
	const [encuesta, setEncuesta] = useState("");

	const mostrarEncuestas = async () => {
		const respuesta = await axios.get("http://localhost:8080/api/encuetas");

		setEncuesta(respuesta.data);
	};

	useEffect(() => {
		mostrarEncuestas();
	}, []);

	const encuetasEnPantalla = Object.values(encueta).map((encueta) => {});

	return (
		<Fragment>
			<h1>Panel Del Administrador</h1>
			<h3>Listado de encuestas realizadas: </h3>
			<div className="container">
				<div>{}</div>
			</div>
		</Fragment>
	);
};

export default AppAdmin;
