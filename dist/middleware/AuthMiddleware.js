"use strict";

var jwt = require("jsonwebtoken");
var dotenv = require("dotenv");
dotenv.config();

/**
 * @description
 * Esta función se encarga de restringir el acceso a usuarios sin prioridad de administrador.
 * @returns res.status(403).json({ message: "Token inválido" }).
 * @returns res.status(401).json({ message: "Token no proporcionado" }).
 * @returns res.status(401).json({ message: "Formato de token inválido" }).
 */
function authenticateToken(req, res, next) {
  var authHeader = req.header("Authorization");
  if (!authHeader) {
    return res.status(401).json({
      message: "Token no proporcionado"
    });
  }
  var tokenParts = authHeader.split(" ");
  if (tokenParts.length !== 2 || tokenParts[0] !== "Bearer") {
    return res.status(401).json({
      message: "Formato de token inválido"
    });
  }
  var token = tokenParts[1];
  jwt.verify(token, process.env.TOKEN_SECRET, function (err, user) {
    if (err) {
      return res.status(403).json({
        message: "Token inválido"
      });
    }
    req.user = user;
    next();
  });
}
module.exports = authenticateToken;