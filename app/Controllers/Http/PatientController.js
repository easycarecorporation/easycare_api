'use strict'

const Patient = use('App/Models/Patient')

class PatientController {

    async index() {
        
        const patients = await Patient.all()

        return patients
    }

    async show({ params, request, response }) {

        const patient = await Patient.find(params.id)

        return patient
    }

    async store({ request, response }) {
       
        const data = request.all()

        const patient = Patient.create(data)

        return patient
    }

    async update({ params, request, response }) {
        
        const data = request.all()

        const patient = await Patient.find(params.id)

        patient.merge(data)
        await patient.save()

        return patient
    }

    async destroy({ params, request, respons }) {

        const patient = await Patient.find(params.id)

        await patient.delete()

        return patient
    }
}

module.exports = PatientController
