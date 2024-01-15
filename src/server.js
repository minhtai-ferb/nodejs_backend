require("dotenv").config();
const express = require("express");
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");

const app = express(); //app express
const port = process.env.PORT || 3000;
const hostname = process.env.HOST_NAME;

//config req.body: use to take date
app.use(express.json()); // for json
app.use(express.urlencoded({ extended: true })); // for form data

//viewEngine
configViewEngine(app);

//route
app.use("/", webRoutes);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
