"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _cors = _interopRequireDefault(require("cors"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _path = _interopRequireDefault(require("path"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _morgan = _interopRequireDefault(require("morgan"));
var _cookieParser = _interopRequireDefault(require("cookie-parser"));
var _user = _interopRequireDefault(require("./routes/user.routes"));
var _parking = _interopRequireDefault(require("./routes/parking.routes"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// Importa CORS

var app = (0, _express["default"])();

//Importing routes

app.set("views", _path["default"].join(__dirname, "views"));
app.set("view engine", "jade");
app.use((0, _morgan["default"])("dev"));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use((0, _cookieParser["default"])());
app.use(_express["default"]["static"](_path["default"].join(__dirname, "public")));

// Habilita CORS para permitir solicitudes desde cualquier dominio
app.use((0, _cors["default"])({
  origin: true,
  credentials: true
}));
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
// Configura bodyParser para parsear JSON
app.use(_bodyParser["default"].json());
//Settings
app.set("port", 4000);
app.use(_user["default"]);
app.use(_parking["default"]);
var _default = exports["default"] = app;