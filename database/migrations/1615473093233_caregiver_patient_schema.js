'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CaregiverPatientSchema extends Schema {
  up () {
    this.create('caregiver_patients', (table) => {
      table.increments()
      table.integer('patient_id').unsigned().references('id').inTable('patients').onUpdate('CASCADE').onDelete('CASCADE')
      table.integer('caregiver_id').unsigned().references('id').inTable('caregivers').onUpdate('CASCADE').onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('caregiver_patients')
  }
}

module.exports = CaregiverPatientSchema
