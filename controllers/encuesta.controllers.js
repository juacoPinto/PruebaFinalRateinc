const Encuesta = require("../models/encuesta");

const postearRespuesta = async (req, res) => {
	const { nota, comentario } = req.body;
	const encuesta = new Encuesta({ nota, comentario });
	await encuesta.save();
	res.json(encuesta);

	const { token } = req.params;
	if (!token) {
		//Usuario no autorizado para acceder al panel de administracion
	}
};

const mostrarEncuestas = async (req, res) => {
	const encuestas = await Encuesta.find();

	res.json(encuestas);
};

module.exports = {
	postearRespuesta,
	mostrarEncuestas,
};
