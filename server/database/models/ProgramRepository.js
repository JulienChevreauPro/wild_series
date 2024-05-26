const AbstractRepository = require("./AbstractRepository");

class ProgramRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "program" as configuration
    super({ table: "program" });
  }

  // The C of CRUD - Create operation

  async create(program) {
    // Execute the SQL INSERT query to add a new program to the "program" table
    const [result] = await this.database.query(
      `insert into ${this.table} (title, synopsis, poster, country, year, category_id) values (?, ?, ?, ?, ?, ?)`,
      [program.title, program.synopsis, program.poster, program.country, program.year, program.category_id]
    );

    // Return the ID of the newly inserted program
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific program by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the program
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all programs from the "program" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of programs
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing program

  // async update(program) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an program by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = ProgramRepository;
