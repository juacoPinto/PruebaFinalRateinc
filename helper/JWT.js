const jwt = require("jsonwebtoken");

const generarJwt = (usuarioId = "") => {
	const payload = { usuarioId };

	const newToken = jwt.sign(payload, process.env.JWT, { expiresIn: "4h" });

	return newToken;
};

module.exports = {
	generarJwt,
};
