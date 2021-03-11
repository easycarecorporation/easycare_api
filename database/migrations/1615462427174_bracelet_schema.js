'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BraceletSchema extends Schema {
  up () {
    this.create('bracelets', (table) => {
      table.increments()
      table.string('model', 100).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('bracelets')
  }
}

module.exports = BraceletSchema
