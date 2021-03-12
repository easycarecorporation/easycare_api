'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class DoseDate extends Model {

    dose() {
        return this.hasOne('App/Models/Dose')
    }
}

module.exports = DoseDate
