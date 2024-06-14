const knex = require("../config/db.config");


const questionTableName = "questions"

const getAllQuestion = async (query = {}) => {
  const filter = {}
  if (query.userId) {
    filter['userId'] = Number(query.userId)
  }
  return await knex(questionTableName).where(filter)
}

const createQuestion = async (data) => {
  return await knex(questionTableName).insert(data);
}

const getQuestionById = async (id) => {
  return await knex(questionTableName).where({ id }).first()
}


module.exports = { getAllQuestion, createQuestion, getQuestionById }
