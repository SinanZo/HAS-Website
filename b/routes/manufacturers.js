const express = require("express");
const router = express.Router();
const manufacturersController = require("../controllers/manufacturersController");

router.get("/", manufacturersController.getAllManufacturers);
router.get("/:manufacturerName", manufacturersController.getManufacturerByName);

module.exports = router;
