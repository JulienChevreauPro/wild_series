const tables = require("../../database/tables");

// Some data to make the trick

// const programs = [
//   {
//     id: 1,
//     title: "The Good Place",
//     synopsis:
//       "À sa mort, Eleanor Shellstrop est envoyée au Bon Endroit, un paradis fantaisiste réservé aux individus exceptionnellement bienveillants. Or Eleanor n'est pas exactement une « bonne personne » et comprend vite qu'il y a eu erreur sur la personne. Avec l'aide de Chidi, sa prétendue âme sœur dans l'au-delà, la jeune femme est bien décidée à se redécouvrir.",
//     poster:
//       "https://img.betaseries.com/JwRqyGD3f9KvO_OlfIXHZUA3Ypw=/600x900/smart/https%3A%2F%2Fpictures.betaseries.com%2Ffonds%2Fposter%2F94857341d71c795c69b9e5b23c4bf3e7.jpg",
//     country: "USA",
//     year: 2016,
//   },
//   {
//     id: 2,
//     title: "Dark",
//     synopsis:
//       "Quatre familles affolées par la disparition d'un enfant cherchent des réponses et tombent sur un mystère impliquant trois générations qui finit de les déstabiliser.",
//     poster:
//       "https://img.betaseries.com/zDxfeFudy3HWjxa6J8QIED9iaVw=/600x900/smart/https%3A%2F%2Fpictures.betaseries.com%2Ffonds%2Fposter%2Fc47135385da176a87d0dd9177c5f6a41.jpg",
//     country: "Allemagne",
//     year: 2017,
//   },
// ];

// Declare the action

const browse = async (req, res, next) => {
  try {
    const programsFromDB = await tables.program.readAll();
    res.status(200).json(programsFromDB);
  } catch (err) {
    next(err);
  }
};

// const browse = (req, res) => {
//   if (req.query.q != null) {
//     const filteredPrograms = programs.filter((program) =>
//       program.synopsis.includes(req.query.q)
//     );

//     res.json(filteredPrograms);
//   } else {
//     res.json(programs);
//   }
// };

// *****************************************************

const read = (req, res, next) => {
  try {
    const parsedId = parseInt(req.params.id, 10);

    const program = tables.program.read(parsedId);

    if (program != null) {
      res.status(200).json(program);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  // Extract the program data from the request body and params
  const program = { ...req.body, id: req.params.id };

  try {
    // Update the program in the database
    await tables.program.update(program);

    // Respond with HTTP 204 (No Content)
    res.sendStatus(204);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const add = async (req, res, next) => {
  // Extract the program data from the request body
  const program = req.body;

  try {
    // Insert the program into the database
    const insertId = await tables.program.create(program);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted program
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    // Delete the program from the database
    await tables.program.delete(req.params.id);

    // Respond with HTTP 204 (No Content)
    res.sendStatus(204);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// Export it to import it somewhere else

module.exports = { browse, read, edit, add, destroy };
