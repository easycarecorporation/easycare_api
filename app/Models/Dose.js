'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Dose extends Model {

    doseDates() {
        return this.hasMany('App/Models/DoseDate')
    }

    doseTypes() {
        return this.hasMany('App/Models/DoseType')
    }

    medicine() {
        return this.belongsTo('App/Models/Medicine')
    }
}

module.exports = Dose
