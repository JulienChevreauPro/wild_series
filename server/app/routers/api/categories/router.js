const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

const { browse, read, edit, add, destroy } = require("../../../controllers/categoryActions");

/* Here you code */
router.get("/", browse);

// Route to get a specific item by ID
router.get("/:id", read);

// Route to edit an existing category
router.put("/:id", edit);

// Route to add a new category
router.post("/", add);

// Route to destry an existing category
router.delete("/:id", destroy);

/* ************************************************************************* */

module.exports = router;