'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DoseTypeSchema extends Schema {
  up () {
    this.create('dose_types', (table) => {
      table.increments()
      table.string('nome').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('dose_types')
  }
}

module.exports = DoseTypeSchema
