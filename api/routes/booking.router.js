const router = require("express").Router();
const { checkAuth, checkAdmin } = require("../middleware");
const {
    getAllBookings,
    getOneBooking,
    createBooking,
    updateBooking,
    deleteBooking,
} = require("../controllers/booking.controller");

router.get("/", checkAuth, getAllBookings);
router.get("/:id", checkAuth, getOneBooking);
router.post("/", checkAuth, createBooking);
router.put("/:id", checkAuth, updateBooking);
router.delete("/:id", checkAuth, checkAdmin, deleteBooking);

module.exports = router;
