const router = require("express").Router();
const userController = require("../controller/user.controller");
const {validId} = require("../middleware/global.middleware");

router.get("/user", userController.getAllUser);
router.get("/user/:id", validId ,userController.getByIdUser);
router.post("/user", userController.registerUser);


module.exports = router;