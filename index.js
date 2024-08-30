require("dotenv").config();
const express = require("express");
const app = express();

const cors = require("cors");

const indexRoutes = require("./src/routes/index.routes");

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const corsOptions = {
  origin: [process.env.FRONTEND_URL],
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use("/api", cors(corsOptions), indexRoutes);

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "server running properly",
  });
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
