const express = require("express");
const router = express.Router();
const verify = require ("../middleware/auth");
const userController = require ("../controllers/user_controller");
//now we define the routes
// router.get("/users", userController.getUsers);

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/", verify,(req,res) =>{
    res.send(req.user);
});
module.exports = router;
