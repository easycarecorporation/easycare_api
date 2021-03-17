'use strict'

const Patient = use('App/Models/Patient')

class PatientController {

    async index() {
        
        const patients = await Patient.all()

        return patients
    }

    async show({ params }) {

        const patient = await Patient.find(params.id)

        return patient
    }

    async store({ request }) {
       
        const data = request.only([
            'name',
            'birth_date',
            'weight',
            'height',
            'blood_type',
            'photo',
            'zip_code',
            'street',
            'number',
            'complement',
            'district',
            'city',
            'state',
            'bracelet_id'
        ])

        const { 
            caregiver_id, 
            allergies_ids, 
            diseases_ids  
        } = request.only(['caregiver_id', 'allergies_ids', 'diseases_ids'])

        const patient = await Patient.create(data)
        
        await patient.caregivers().attach([caregiver_id])
        await patient.allergies().attach(allergies_ids)
        await patient.diseases().attach(diseases_ids)

        return patient
    }

    async update({ params, request }) {
        
        const data = request.all()

        const patient = await Patient.find(params.id)

        patient.merge(data)
        await patient.save()

        return patient
    }

    async addAllergy({ params }){

        const patient = await Patient.find(params.id)

        const allergyExists = await patient.allergies().wherePivot('allergy_id', params.allergy).fetch()

        if(!allergyExists.toJSON().length) {

            await patient.allergies().attach([params.allergy])
        }

        return patient
    }

    async addDisease({ params }){

        const patient = await Patient.find(params.id)

        const diseaseExists = await patient.diseases().wherePivot('disease_id', params.disease).fetch()

        if(!diseaseExists) {

            await patient.diseases().attach([params.disease])
        }

        return patient
    }

    async destroyAllergy({ params }){

        const patient = await Patient.find(params.id)

        await patient.allergies().detach([params.allergy])

        return patient
    }

    async destroyDisease({ params }){

        const patient = Patient.find(params.id)

        await patient.disease().detach([params.allergy])

        return patient
    }

    async destroy({ params }) {

        const patient = await Patient.find(params.id)

        await patient.delete()

        return patient
    }
}

module.exports = PatientController
