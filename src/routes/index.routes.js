const express = require("express");
const router = express.Router();
const sendEmailRoutes = require("../modules/send-email/router/sendEmail.routes");

router.use("/send-email", sendEmailRoutes);

module.exports = router;
