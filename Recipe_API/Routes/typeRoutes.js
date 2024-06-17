const express = require ("express");
const typeController = require ("../controllers/type_controller");
const router = express.Router();
router.post("/", typeController.creatType);
router.get("/",typeController.getAllTypes);
router.get("/:id",typeController.getTypeByID);
router.get("/user/:userID",typeController.getTypeByUser);
router.put("/:id",typeController.updateType);
router.delete("/:id",typeController.deleteType);

module.exports = router;
