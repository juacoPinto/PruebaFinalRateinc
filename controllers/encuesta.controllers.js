const Encuesta = require("../models/encuesta");

const postearRespuesta = async (req, res) => {
	const { nota, comentario } = req.body;
	const encuesta = new Encuesta({ nota, comentario });
	await encuesta.save();
};

module.exports = {
	postearRespuesta,
};
