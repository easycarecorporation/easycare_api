'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DiseaseSchema extends Schema {
  up () {
    this.create('diseases', (table) => {
      table.increments()
      table.string('description').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('diseases')
  }
}

module.exports = DiseaseSchema
