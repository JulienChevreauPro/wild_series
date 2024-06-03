const tables = require("../../database/tables");

// Some data to make the trick

// const categories = [
//     {
//       id: 1,
//       name: "Comédie",
//     },
//     {
//       id: 2,
//       name: "Science-Fiction",
//     },
//   ];

// Declare the actions

const browse = async (req, res, next) => {
  try {
    const categoriesFromDB = await tables.category.readAll();
    res.status(200).json(categoriesFromDB);
  } catch (err) {
    next(err);
  }
};

// const browse = (req, res) => {
//   if (req.query.q != null) {
//     const filteredCategories = categories.filter((category) =>
//       category.name.includes(req.query.q)
//     );

//     res.json(filteredCategories);
//   } else {
//     res.json(categories);
//   }
// };

// *****************************************************

const read = async (req, res, next) => {
  try {
    const parsedId = parseInt(req.params.id, 10);

    const category = await tables.category.read(parsedId);

    if (category != null) {
      res.status(200).json(category);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  // Extract the category data from the request body and params
  const category = { ...req.body, id: req.params.id };

  try {
    // Update the category in the database
    await tables.category.update(category);

    // Respond with HTTP 204 (No Content)
    res.sendStatus(204);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const add = async (req, res, next) => {
  // Extract the category data from the request body
  const category = req.body;

  try {
    // Insert the category into the database
    const insertId = await tables.category.create(category);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted category
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    // Delete the category from the database
    await tables.category.delete(req.params.id);

    // Respond with HTTP 204 (No Content)
    res.sendStatus(204);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// Export them to import them somewhere else

module.exports = { browse, read, edit, add, destroy };
