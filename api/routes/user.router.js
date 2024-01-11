const router = require("express").Router();
const { checkAuth, checkAdmin } = require("../middleware");
const {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller");

router.get("/", checkAuth, getAllUsers);
router.get("/:id", checkAuth, getOneUser);
router.post("/", checkAuth, checkAdmin, createUser);
router.put("/:id", checkAuth, checkAdmin, updateUser);
router.delete("/:id", checkAuth, checkAdmin, deleteUser);

module.exports = router;
