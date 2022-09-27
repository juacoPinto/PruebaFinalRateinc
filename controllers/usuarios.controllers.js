const { generarJwt } = require("../helper/JWT");
const Usuario = require("../models/usuario");

const crearUsuario = async (req, res) => {
	const { nombre, password } = req.body;
	const usuario = new Usuario({ nombre, password });
	await usuario.save();
	res.json(usuario);
};

const loginUsuario = async (req, res) => {
	const { nombre, password } = req.body;
	const usuario = await Usuario.findOne({ nombre });
	if (!usuario) {
		return res.json("Usuario no registrado");
	}
	if (!password) {
		return res.json("Contrasela incorrecta");
	}
	//Validamos
	const token = generarJwt(usuario.id);
	res.json(token); //solo para verificar que lo esta creando
};

module.exports = {
	crearUsuario,
	loginUsuario,
};
