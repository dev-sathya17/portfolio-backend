const express = require("express");
const controller = require("../controllers/controller");

const router = express.Router();

router.post("/send", controller.sendMail);

module.exports = router;
