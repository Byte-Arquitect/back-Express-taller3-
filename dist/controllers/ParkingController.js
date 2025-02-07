"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.methods = void 0;
var _app = _interopRequireDefault(require("../app"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var db = require("../models");
var Parking = db.parking;
var Parking_User = db.parking_user;

/**
  * @description
  * Esta función se encarga de obtener todos los datos de los estacionamientos.
  * @returns res.status(200).json(parkingData).
 */
var getAllParkingData = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var parkingData;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Parking.findAll();
        case 3:
          parkingData = _context.sent;
          res.status(200).json(parkingData);
          _context.next = 11;
          break;
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.error("Error fetching parking data:", _context.t0);
          res.status(500).json({
            error: "Error fetching parking data"
          });
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }));
  return function getAllParkingData(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/**
  * @description
  * Esta función se encarga de obtener todos los espacios ocupados. 
  * @returns res.status(200).json(occupiedSpaces.length).
 */
var getOccupiedSpaces = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var occupiedSpaces;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Parking_User.findAll({
            where: {
              total_price: 0
            }
          });
        case 3:
          occupiedSpaces = _context2.sent;
          res.json(occupiedSpaces.length);
          _context2.next = 11;
          break;
        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          console.error("Error fetching occupied spaces:", _context2.t0);
          res.status(500).json({
            error: "Error fetching occupied spaces"
          });
        case 11:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return function getOccupiedSpaces(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

/**
 * @description
 * Esta función se encarga de calcular el cobro extra por cada espacio ocupado.
 * @returns res.status(200).json({ ExtraFee }).
 */
var calculateExtraFee = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var parkingId, places, parking, occupiedPlaces, totalPlaces, ExtraFee;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          parkingId = 1;
          _context3.next = 4;
          return Parking_User.findAll({
            where: {
              parking_id: parkingId,
              total_price: 0
            }
          });
        case 4:
          places = _context3.sent;
          _context3.next = 7;
          return Parking.findOne({
            where: {
              id: parkingId
            }
          });
        case 7:
          parking = _context3.sent;
          occupiedPlaces = places.length;
          if (occupiedPlaces === 0) {
            occupiedPlaces = 1;
          }
          totalPlaces = parking.floor_count * parking.places_per_floor;
          ExtraFee = parking.base_price * occupiedPlaces / totalPlaces;
          res.status(200).json({
            ExtraFee: ExtraFee
          });
          _context3.next = 19;
          break;
        case 15:
          _context3.prev = 15;
          _context3.t0 = _context3["catch"](0);
          console.error("Error calculating total places:", _context3.t0);
          res.status(500).json({
            error: "Error calculating total places"
          });
        case 19:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 15]]);
  }));
  return function calculateExtraFee(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

/**
 * @description
 * Esta función se encarga de calcular el pago final de un usuario.
 * @returns res.status(200).json({ FinalPayment }).
 */
var calculateFinalPayment = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var parkingId, userId, transaction, id, parking, dateToHours, FinalPayment;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          parkingId = 1;
          userId = req.body.reservationDataInfo.response.user_id;
          _context4.next = 5;
          return Parking_User.findOne({
            where: {
              user_id: userId,
              total_price: 0
            },
            order: [['entry_time', 'DESC']]
          });
        case 5:
          transaction = _context4.sent;
          id = transaction.id;
          _context4.next = 9;
          return Parking.findOne({
            where: {
              id: parkingId
            }
          });
        case 9:
          parking = _context4.sent;
          console.log("entry_time: ", transaction.entry_time);
          console.log("exit_time: ", transaction.exit_time);
          dateToHours = Math.round((transaction.exit_time - transaction.entry_time) / 1000);
          console.log("dateToHours", dateToHours);
          FinalPayment = Math.round(parking.base_price + transaction.extra_fee * dateToHours);
          _context4.next = 17;
          return transaction.update({
            total_price: FinalPayment
          });
        case 17:
          res.status(200).json(FinalPayment);
          _context4.next = 24;
          break;
        case 20:
          _context4.prev = 20;
          _context4.t0 = _context4["catch"](0);
          console.error("Error calculating payment:", _context4.t0);
          res.status(500).json({
            error: "Error calculating payment"
          });
        case 24:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 20]]);
  }));
  return function calculateFinalPayment(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

/**
 * @description
 * Esta función se encarga de registrar el pago de un usuario.
 * @returns res.status(200).json({ registerDate }).
 */
var registerPayment = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var parkingId, userId, registerDate, transaction;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          parkingId = 1;
          userId = req.body.user_id;
          registerDate = new Date().toLocaleString("es-CL");
          _context5.next = 6;
          return Parking_User.findOne({
            where: {
              user_id: userId,
              total_price: 0
            }
          });
        case 6:
          transaction = _context5.sent;
          _context5.next = 9;
          return transaction.update({
            exit_time: new Date(registerDate).toLocaleString("es-CL")
          });
        case 9:
          res.status(200).json({
            registerDate: registerDate
          });
          _context5.next = 16;
          break;
        case 12:
          _context5.prev = 12;
          _context5.t0 = _context5["catch"](0);
          console.error("Error registering payment:", _context5.t0);
          res.status(500).json({
            error: "Error registering payment"
          });
        case 16:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 12]]);
  }));
  return function registerPayment(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

/**
 * @description
 * Esta función se encarga de obtener los datos de un usuario.
 * @returns res.status(200).json( info ).
 */
var getParkingUserData = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var parkingId, userId, info;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          parkingId = req.body.parking_id;
          userId = req.body.user_id;
          _context6.next = 5;
          return Parking_User.findOne({
            where: {
              parking_Id: parkingId,
              user_Id: userId,
              total_price: 0
            }
          });
        case 5:
          info = _context6.sent;
          res.status(200).json(info);
          _context6.next = 13;
          break;
        case 9:
          _context6.prev = 9;
          _context6.t0 = _context6["catch"](0);
          console.error("Error getting parking user data:", _context6.t0);
          res.status(500).json({
            error: "Error getting parking user data"
          });
        case 13:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 9]]);
  }));
  return function getParkingUserData(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

/**
 * @description
 * Esta función se encarga de obtener el historial de un usuario.
 * @returns res.status(200).json({ history }).
 */
var getHistory = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var userId, history;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          userId = req.params.userId;
          _context7.next = 4;
          return Parking_User.findAll({
            where: {
              user_Id: userId
            }
          });
        case 4:
          history = _context7.sent;
          res.status(200).json({
            history: history
          });
          _context7.next = 12;
          break;
        case 8:
          _context7.prev = 8;
          _context7.t0 = _context7["catch"](0);
          console.error("Error getting historial:", _context7.t0);
          res.status(500).json({
            error: "Error getting historial"
          });
        case 12:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 8]]);
  }));
  return function getHistory(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

/**
 * @description
 * Esta función se encarga de obtener el historial de un estacionamiento.
 * @returns res.status(200).json({ history }).
 */
var getHistoryParking = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var ParkingId, history;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          ParkingId = req.params.ParkingId;
          _context8.next = 4;
          return Parking_User.findAll({
            where: {
              parking_Id: ParkingId
            }
          });
        case 4:
          history = _context8.sent;
          res.status(200).json({
            history: history
          });
          _context8.next = 12;
          break;
        case 8:
          _context8.prev = 8;
          _context8.t0 = _context8["catch"](0);
          console.error("Error getting historial:", _context8.t0);
          res.status(500).json({
            error: "Error getting historial"
          });
        case 12:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 8]]);
  }));
  return function getHistoryParking(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();

/**
 * @description
 * Esta función se encarga de obtener los datos de un estacionamiento.
 * @returns res.status(200).json({ parkings }).
 */
var getParkings = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var parkings;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          _context9.next = 3;
          return Parking.findAll({
            attributes: ["id", "name", "address", "base_price", "floor_count", "places_per_floor"]
          });
        case 3:
          parkings = _context9.sent;
          res.status(200).json({
            parkings: parkings
          });
          _context9.next = 10;
          break;
        case 7:
          _context9.prev = 7;
          _context9.t0 = _context9["catch"](0);
          res.status(500).json({
            message: "Error en el servidor"
          });
        case 10:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[0, 7]]);
  }));
  return function getParkings(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();

/**
 * @description
 * Esta función se encarga de editar el precio base de un estacionamiento.
 * @returns res.status(200).json({ parking }).
 */
var editPrice = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var parkingId, newBasePrice, parking;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          parkingId = req.body.parkingId;
          newBasePrice = req.body.newBasePrice;
          _context10.next = 5;
          return Parking.update({
            base_price: newBasePrice
          }, {
            where: {
              id: parkingId
            }
          });
        case 5:
          parking = _context10.sent;
          res.status(200).json({
            parking: parking
          });
          _context10.next = 12;
          break;
        case 9:
          _context10.prev = 9;
          _context10.t0 = _context10["catch"](0);
          res.status(500).json({
            message: "Error en el servidor"
          });
        case 12:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[0, 9]]);
  }));
  return function editPrice(_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();

/**
 * @description
 * Esta función se encarga de editar los datos de un estacionamiento.
 * @returns res.status(200).json({ parking }).
 */
var editParking = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res) {
    var newParking, parking;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          console.log(req.body);
          _context11.prev = 1;
          newParking = req.body.newParking;
          _context11.next = 5;
          return Parking.update({
            floor_count: newParking.floor_count,
            places_per_floor: newParking.places_per_floor,
            base_price: newParking.base_price
          }, {
            where: {
              id: newParking.id
            }
          });
        case 5:
          parking = _context11.sent;
          res.status(200).json({
            parking: parking
          });
          _context11.next = 12;
          break;
        case 9:
          _context11.prev = 9;
          _context11.t0 = _context11["catch"](1);
          res.status(500).json({
            message: "Error en el servidor"
          });
        case 12:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[1, 9]]);
  }));
  return function editParking(_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}();

/**
 * @description
 * Esta función se encarga de obtener los datos de un estacionamiento.
 * @returns res.status(200).json({ parking }). 
 */
var getParking = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12(req, res) {
    var parkingId, parking;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          _context12.prev = 0;
          parkingId = req.params.parkingId;
          _context12.next = 4;
          return Parking.findOne({
            where: {
              id: parkingId,
              attributes: ["Address"]
            }
          });
        case 4:
          parking = _context12.sent;
          res.status(200).json({
            parking: parking
          });
          _context12.next = 11;
          break;
        case 8:
          _context12.prev = 8;
          _context12.t0 = _context12["catch"](0);
          res.status(500).json({
            message: "Error en el servidor"
          });
        case 11:
        case "end":
          return _context12.stop();
      }
    }, _callee12, null, [[0, 8]]);
  }));
  return function getParking(_x23, _x24) {
    return _ref12.apply(this, arguments);
  };
}();
var methods = exports.methods = {
  getAllParkingData: getAllParkingData,
  calculateExtraFee: calculateExtraFee,
  calculateFinalPayment: calculateFinalPayment,
  getHistory: getHistory,
  getOccupiedSpaces: getOccupiedSpaces,
  registerPayment: registerPayment,
  getParkingUserData: getParkingUserData,
  getParkings: getParkings,
  editPrice: editPrice,
  editParking: editParking,
  getHistoryParking: getHistoryParking,
  getParking: getParking
};