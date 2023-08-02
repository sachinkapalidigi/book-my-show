const express = require("express");
//
const { getTheatres } = require("./theatres.controller");

const theatresRouter = express.Router();

theatresRouter.get("/", getTheatres);

module.exports = theatresRouter;
