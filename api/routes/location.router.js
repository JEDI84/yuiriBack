const router = require("express").Router();
const { checkAuth, checkAdmin } = require("../middleware");
const {
  getAllLocations,
  getOneLocation,
  createLocation,
  updateLocation,
  deleteLocation,
} = require("../controllers/location.controller");

router.get("/", checkAuth, getAllLocations);
router.get("/:id", checkAuth, getOneLocation);
router.post("/", checkAuth, checkAdmin, createLocation);
router.put("/:id", checkAuth, checkAdmin, updateLocation);
router.delete("/:id", checkAuth, checkAdmin, deleteLocation);

module.exports = router;
