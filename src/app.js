const express = require("express");
const morgan = require("morgan");
const pkg = require("../package.json");

const { createRoles } = require("./libs/initialSetup");

const app = express();
createRoles();

app.set("pkg", pkg);
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    author: app.get("pkg").author,
    description: app.get("pkg").description,
    version: app.get("pkg").version,
  });
});

app.use("/api/products", require("./routes/products.routes"));
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/users", require("./routes/user.routes"));

module.exports = app;

// import express from "express";
// import morgan from "morgan";
// import pkg from "../package.json";

// const app = express();

// app.use(morgan("dev"));

// app.get("/", (req, res) => {
//   res.json({
//     author: pkg.author,
//     description: pkg.description,
//     version: pkg.version
//   });
// });

// export default app;
