const { Router } = require("express");
const {
	postearRespuesta,
	mostrarEncuestas,
} = require("../controllers/encuesta.controllers");

const router = Router();

router.post("/", postearRespuesta);

router.get("/", mostrarEncuestas);

module.exports = router;
