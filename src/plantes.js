const fs = require("fs");
// Initialisation de la base de données
const dbFile = ".data/plante.db";
const exists = fs.existsSync(dbFile);
const sqlite3 = require("sqlite3");
const dbWrapper = require("sqlite");
const knex = require('knex')({
  client: 'sqlite3',
  connection: {
      filename: dbFile
  },
  useNullAsDefault:true,
  debug: true,
});


