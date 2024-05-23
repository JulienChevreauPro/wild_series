const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

const { browse, read } = require("../../../controllers/categoryActions");

/* Here you code */
router.get("/", browse);

// Route to get a specific item by ID
router.get("/:id", read);

/* ************************************************************************* */

module.exports = router;