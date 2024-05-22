const express = require("express");

const router = express.Router();

const sayWelcome = require("../../controllers/sayActions");

router.get("/", sayWelcome);

const browsePrograms = require("../../controllers/programActions");

router.get("/programs", browsePrograms);

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const itemsRouter = require("./items/router");

router.use("/items", itemsRouter);


/* ************************************************************************* */

module.exports = router;
