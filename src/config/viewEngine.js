const path = require("path");
const express = require("express");

const configViewEngine = (app) => {
  //config template engine
  //console.log(__dirname);
  app.set("views", path.join("./src", "/views"));
  app.set("view engine", "ejs");

  //config static files: image/css/js
  app.use(express.static(path.join(__dirname, "../public")));
};

module.exports = configViewEngine;
