const knex = require("knex");

const environment = "development";

const config = require('../knexfile')[environment];

const db = knex(config);

module.exports = db;
