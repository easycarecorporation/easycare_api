'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CaregiverSchema extends Schema {
  up () {
    this.table('caregivers', (table) => {
      // alter table

      table
      .integer('user_id').unsigned().references('id').inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
    })
  }

  down () {
    this.table('caregivers', (table) => {
      // reverse alternations
    })
  }
}

module.exports = CaregiverSchema
