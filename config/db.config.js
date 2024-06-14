const knex = require("knex");

const knexFile = require("../knexfile");

const env = process.env.NODE_ENV || "development";
console.log({env});

const db = knex(knexFile[env]);

module.exports = db;
