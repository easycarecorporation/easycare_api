'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CaregiverSchema extends Schema {
  up () {
    this.create('caregivers', (table) => {
      table.increments()
      table.string('name', 120).notNullable()
      table.string('gender').notNullable()
      table.string('document').notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('caregivers')
  }
}

module.exports = CaregiverSchema
