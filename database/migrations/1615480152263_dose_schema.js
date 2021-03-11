'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DoseSchema extends Schema {
  up () {
    this.create('doses', (table) => {
      table.increments()
      table.string('quantity').notNullable();
      table.integer('medicine_id').unsigned().references('id').inTable('medicines').onUpdate('CASCADE').onDelete('CASCADE')
      table.integer('dose_type_id').unsigned().references('id').inTable('dose_types').onUpdate('CASCADE').onDelete('CASCADE')
      table.integer('dose_date_id').unsigned().references('id').inTable('dose_dates').onUpdate('CASCADE').onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('doses')
  }
}

module.exports = DoseSchema
