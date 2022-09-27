import axios from "axios";
import React, { Fragment, useState } from "react";

const ResponderEncuesta = () => {
	const [nota, setNota] = useState(0);
	const [comentario, setComentario] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();

		await axios.post("http://localhost:8080/api/encuesta", {
			nota: nota,
			comentario: comentario,
		});

		setNota(0);
		setComentario("");
	};

	return (
		<Fragment>
			<h3>
				En una escala de 1 a 10: ¿Qué le pareció el proceso de selección de
				Rateinc?
			</h3>
			<div className="container">
				<form onSubmit={handleSubmit}>
					<label>Nota que le pondria: </label>
					<input
						value={nota}
						type="text"
						placeholder="Del 1 al 10"
						onChange={(e) => setNota(e.target.value)}
					></input>
					<br />
					<label>Comentario</label>
					<input
						value={comentario}
						type="text"
						placeholder="Agregue su comentario"
						onChange={(e) => setComentario(e.target.value)}
					></input>
					<button type="submit">Enviar Encuesta</button>
				</form>
			</div>
		</Fragment>
	);
};

export default ResponderEncuesta;
