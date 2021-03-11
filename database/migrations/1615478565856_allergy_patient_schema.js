'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AllergyPatientSchema extends Schema {
  up () {
    this.create('allergy_patients', (table) => {
      table.increments()
      table.integer('patient_id').unsigned().references('id').inTable('patients').onUpdate('CASCADE').onDelete('CASCADE')
      table.integer('allergy_id').unsigned().references('id').inTable('allergies').onUpdate('CASCADE').onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('allergy_patients')
  }
}

module.exports = AllergyPatientSchema
