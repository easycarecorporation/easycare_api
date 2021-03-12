'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Bracelet extends Model {

    patient() {
        this.hasOne('App/Models/Patient')
    }
}

module.exports = Bracelet
