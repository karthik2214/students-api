const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
require("./db/connection");
const Student = require("./models/students");
const router = new express.Router();
const studentRouter = require("./routers/student");
const serverless = require("serverless-http");

app.use(express.json());
app.use(`/.netlify/functions/api`, studentRouter);
// app.use(router);

app.listen(port, () => {
  console.log(`Head Towards port ${port}`);
});

module.exports = app;
module.exports.handler = serverless(app);
