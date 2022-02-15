const express = require("express");
const app = express();

const arraysRouter = require("./arrays/arrays.router");
const objectsRouter = require("./objects/objects.router");

app.use(express.json());

app.use("/arrays", arraysRouter);
app.use("/objects", objectsRouter);

// Not found handler
app.use((req, res, next) => {
  next({ status: 404, message: `Not found: ${req.originalUrl}; please proceed to /arrays or /objects` });
});

// Error handler
app.use((error, req, res, next) => {
  console.error(error);
  const { status = 500, message = "Something went wrong!" } = error;
  res.status(status).json({ error: message });
});

module.exports = app;