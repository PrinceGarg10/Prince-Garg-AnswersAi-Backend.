const knex = require("../config/db.config");


const userTableName = "users"

const getAllUser = async () => {
  return await knex(userTableName)
}

const getByEmail = async (email) => {
  return await knex(userTableName).where({ email }).first();
}

const createUser = async (data) => {
  return await knex(userTableName).insert(data);
}

const getUserById = async (id) => {
  return await knex(userTableName).where({ id }).first()
}


module.exports = { getAllUser, createUser, getUserById, getByEmail }
