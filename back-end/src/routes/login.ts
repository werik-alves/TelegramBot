import express from "express";
const { login } = require("../controller/loginController");

const router = express.Router();

router.post("/login", login);

module.exports = router;
