require("dotenv").config();
const express = require("express");
const db = require("./db/conn");

const PORT = process.env.PORT || 3000;
const app = express();

const userRoute = require("./routes/userRoute");

app.use(express.json());

app.use("/api/users", userRoute);
app.listen(PORT, () => {
  console.log(`Server is live on ${PORT}`);
});
