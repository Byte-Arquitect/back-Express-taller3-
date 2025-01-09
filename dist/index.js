"use strict";

var _app = _interopRequireDefault(require("./app.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var main = function main() {
  _app["default"].listen(_app["default"].get("port"));
  console.log("Server on port", _app["default"].get("port"));
};
main();