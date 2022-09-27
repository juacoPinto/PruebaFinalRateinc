const { Router } = require("express");
const {
	crearUsuario,
	loginUsuario,
} = require("../controllers/usuarios.controllers");

const router = Router();

router.post("/", crearUsuario);

router.post("/login", loginUsuario);

module.exports = router;
