const { Router } = require("express");
const { postearRespuesta } = require("../controllers/encuesta.controllers");

const router = Router();

router.post("/", postearRespuesta);

module.exports = router;
