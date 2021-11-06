const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
require("./db/connection");
const Student = require("./models/students");
const router = new express.Router();
const studentRouter = require("./routers/student");

app.use(express.json());
app.use(studentRouter);

app.listen(port, () => {
  console.log(`Head Towards port ${port}`);
});
