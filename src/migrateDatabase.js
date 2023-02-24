var fs = require("fs");

const migrateDatabase = async () => {
  try {
    const sqlMigrate = fs.readFileSync("dataTables.sql").toString();
    await client.query(sqlMigrate);
  } catch (error) {
    console.error(error.stack);
  }
};

module.exports = migrateDatabase;
