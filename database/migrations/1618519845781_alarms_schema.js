'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlarmsSchema extends Schema {
  up () {
    this.create('alarms', (table) => {
      table.increments()
      table.string('title').notNullable()
      table.string('message').notNullable()
      table.string('type').notNullable()
      table.json('metadata')
      table.integer('user_id').unsigned().references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE')
      table.integer('bracelet_id').unsigned().references('id').inTable('bracelets').onUpdate('CASCADE').onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('alarms')
  }
}

module.exports = AlarmsSchema
