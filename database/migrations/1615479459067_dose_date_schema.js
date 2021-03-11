'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DoseDateSchema extends Schema {
  up () {
    this.create('dose_dates', (table) => {
      table.increments()
      table.datetime('data').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('dose_dates')
  }
}

module.exports = DoseDateSchema
