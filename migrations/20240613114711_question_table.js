/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("questions", (table) => {
        table.increments("id");
        table.string("question").index();
        table.string("answer").notNullable();
        table.integer('userId').unsigned().notNullable()
        table.foreign('userId').references('id').inTable('users')

        table.timestamps(true, true, true)
    });

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTableIfExists("questions");
};
