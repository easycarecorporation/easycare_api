'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Patient extends Model {

    bracelet() {
        return this.belongsTo('App/Models/Bracelet')
    }

    diseases() {
        return this.belongsToMany('App/Models/Disease').pivotTable('disease_patients')
    }

    allergies() {
        return this.belongsToMany('App/Models/Allergy').pivotTable('allergy_patients')
    }
}

module.exports = Patient
