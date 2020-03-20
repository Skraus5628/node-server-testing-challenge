exports.seed = async function(knex) {
	await knex("characters").truncate()
	await knex("characters").insert([
		{ name: "grabash", race: "orc", weapons: "scythe" },
		{ name: "Gazlowe", race:"goblin", weapons:"" },
		{ name: "Drizzt", race:"drow", weapons: "sword"  },
		{ name: "Rogar", race: "dwarf", weapons:"mace" },
	])
}
