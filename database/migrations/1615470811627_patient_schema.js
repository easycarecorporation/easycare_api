'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PatientSchema extends Schema {
  up () {
    this.create('patients', (table) => {
      table.increments()
      table.string('name', 80).notNullable()
      table.date('birth_date').notNullable()
      table.float('weight').notNullable()
      table.float('height').notNullable()
      table.string('blood_type').notNullable()
      table.string('photo').notNullable()
      table.string('zip_code').notNullable()
      table.string('street', 255).notNullable()
      table.string('number', 6).notNullable()
      table.string('complement', 50)
      table.string('district', 80).notNullable()
      table.string('city', 50).notNullable()
      table.string('state', 40).notNullable()
      table.integer('bracelet_id').unsigned().references('id').inTable('bracelets').onUpdate('CASCADE').onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('patients')
  }
}

module.exports = PatientSchema
