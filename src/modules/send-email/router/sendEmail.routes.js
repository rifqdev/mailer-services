const express = require("express");
const router = express.Router();
const sendEmailController = require("../controller/sendEmail.controller");

router.post("/v1", sendEmailController.sendEmail);

module.exports = router;
