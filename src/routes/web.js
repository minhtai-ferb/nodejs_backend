const express = require("express");
const {
  getHomepage,
  getABC,
  getHome,
  postCreateUser,
} = require("../controllers/homeController");
const router = express.Router();

//router.Method("/route", handler)

router.get("/", getHomepage);

router.get("/abc", getABC);

router.get("/home", getHome);

router.post("/create-user", postCreateUser);

module.exports = router;
