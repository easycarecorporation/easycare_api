'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Medicine extends Model {

    dose() {
        return this.hasOne('App/Model/Dose')
    }
}

module.exports = Medicine
