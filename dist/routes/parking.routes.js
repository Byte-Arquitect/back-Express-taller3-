"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _ParkingController = require("../controllers/ParkingController");
var _ReservationController = require("../controllers/ReservationController");
var AuthenticateToken = require("../middleware/AuthMiddleware");
var router = (0, _express.Router)();

// Obtener todos los datos de estacionamientos
//Ruta protegida
router.use(AuthenticateToken);
router.get("/parking/", _ParkingController.methods.getAllParkingData);
router.get("/", function (req, res) {
  res.send("Parknmove API");
});

// Calcular costo adicional
//Ruta protegida
router.use(AuthenticateToken);
router.get("/calculateExtraFee", _ParkingController.methods.calculateExtraFee);

// Calcular pago final
//Ruta protegida
router.use(AuthenticateToken);
router.post("/calculateFinalPayment", _ParkingController.methods.calculateFinalPayment);

// Crear una nueva reserva (nueva ruta POST)
//Ruta protegida
router.use(AuthenticateToken);
router.post("/reservations", _ReservationController.reservationController.createReservation);

// Ruta para obtener espacios ocupados en un estacionamiento específico
//Ruta protegida
router.use(AuthenticateToken);
router.get("/parking/occupiedSpaces", _ParkingController.methods.getOccupiedSpaces);

//Ruta protegida
router.use(AuthenticateToken);
router.get("/parking/history/:userId", _ParkingController.methods.getHistory);

//Ruta protegida
router.use(AuthenticateToken);
router.post("/registerPayment", _ParkingController.methods.registerPayment);

//Ruta protegida
router.use(AuthenticateToken);
router.post("/parkinguserdata", _ParkingController.methods.getParkingUserData);

// Ruta para obtener una reserva por user_id y exit_time nulo
//Ruta protegida
router.use(AuthenticateToken);
router.get("/reservations/user/:userId", _ReservationController.reservationController.getReservationByUserId);

//Ruta protegida
router.use(AuthenticateToken);
router.get("/parking/getParkings", _ParkingController.methods.getParkings);
router.get("parking/getParking/:parkingId", _ParkingController.methods.getParking);

//ruta para obtener el historial de un parking
router.get("/parking/report", _ParkingController.methods.getHistoryParking);
router.post("/parking/editPrice", _ParkingController.methods.editPrice);
router.put("/parking/editParking", _ParkingController.methods.editParking);
router.get("/reservations/history", _ReservationController.reservationController.getHistory);
var _default = exports["default"] = router;