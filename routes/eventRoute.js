const express = require("express");
const eventController = require("../controllers/eventController");
const isAuthenticated = require("../middleware/is-auth");
const isAdmin = require("../middleware/is-admin");
const eventValidation = require("../utils/datavalidators/eventValidation");

const router = express.Router();

// GET /v1/events/:eventId/attendees
router.get("/events/:eventId/attendees", eventController.getEventAttendees);

// GET /v1/events/:eventId
router.get("/events/:eventId", eventController.getEventById);

// GET /v1/events (Endpoint ringan untuk daftar lapangan & jadwal futsal)
router.get("/events", eventController.getEvents);

// POST /v1/events (Tambah lapangan/sesi baru - khusus Admin)
router.post(
  "/events",
  isAuthenticated,
  isAdmin,
  eventValidation,
  eventController.createEvent
);

// PUT /v1/events/:eventId (Update data lapangan/sesi - khusus Admin)
router.put(
  "/events/:eventId",
  isAuthenticated,
  isAdmin,
  eventValidation,
  eventController.updateEvent
);

// DELETE /v1/events/:eventId (Hapus lapangan/sesi - khusus Admin)
router.delete(
  "/events/:eventId",
  isAuthenticated,
  isAdmin,
  eventController.deleteEvent
);

module.exports = router;