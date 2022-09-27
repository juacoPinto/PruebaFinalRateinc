const { Schema, model } = require("mongoose");

const encuestaSchema = Schema({
	nota: { type: String, required: true },
	comentario: { type: String, required: true },
});

module.exports = model("Encuesta", encuestaSchema);
