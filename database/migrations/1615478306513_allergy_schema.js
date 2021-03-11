'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AllergySchema extends Schema {
  up () {
    this.create('allergies', (table) => {
      table.increments()
      table.string('description')
      table.timestamps()
    })
  }

  down () {
    this.drop('allergies')
  }
}

module.exports = AllergySchema
