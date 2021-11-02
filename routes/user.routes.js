const router = require("express").Router();
const authController = require("../controllers/auth.controller.js");
const userController = require("../controllers/user.controller.js");
// auth
router.post("/register", authController.signUp);

// user 
router.get("/", userController.getAllUsers);
router.get("/:id", userController.userInfo);

module.exports = router;