'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DiseasePatientSchema extends Schema {
  up () {
    this.create('disease_patients', (table) => {
      table.increments()
      table.integer('patient_id').unsigned().references('id').inTable('patients').onUpdate('CASCADE').onDelete('CASCADE')
      table.integer('disease_id').unsigned().references('id').inTable('diseases').onUpdate('CASCADE').onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('disease_patients')
  }
}

module.exports = DiseasePatientSchema
