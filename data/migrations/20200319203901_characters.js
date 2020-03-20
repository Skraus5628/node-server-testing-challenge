
exports.up = async function(knex) {
	await knex.schema.createTable("characters", (table) => {
		table.increments()
        table.text("name").unique().notNullable()
        table.text("race").notNullable()
        table.text("weapons")
	})
}

exports.down = async function(knex) {
	await knex.schema.dropTableIfExists("characters")
}
