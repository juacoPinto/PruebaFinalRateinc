const express = require("express");
require("dotenv").config();
const cors = require("cors");

const encuestaRoutes = require("../routes/encuesta.routes");
const usuariosRoutes = require("../routes/usuarios.routes");
const dbConnection = require("../database/config");

class Server {
	constructor() {
		this.app = express();
		this.port = process.env.PORT;
		this.path = "/api/encuesta";
		this.usuarioPath = "/api/usuarios";
		//
		this.middlewares();
		this.listen();
		this.database();
		this.routes();
	}
	middlewares() {
		this.app.use(cors());
		this.app.use(express.json());
		this.app.use(express.static("public"));
	}

	async database() {
		await dbConnection();
	}

	routes() {
		this.app.use(this.path, encuestaRoutes);
		this.app.use(this.usuarioPath, usuariosRoutes);
	}

	listen() {
		this.app.listen(this.port, () => {
			console.log(`Escuchando en puerto : ${this.port}`);
		});
	}
}

module.exports = Server;
