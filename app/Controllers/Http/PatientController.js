'use strict'

const Patient = use('App/Models/Patient')

const QueryBuilderService = use('App/Services/QueryBuilderService')

const CloudinaryStorageService = use('App/Services/CloudinaryStorageService')

class PatientController {

    constructor() {
        this.queryBuilderService = new QueryBuilderService()
        this.cloudinaryStorageService = new CloudinaryStorageService()
    }

    async index({ request }) {

        const query = request.get()

        const name = this.queryBuilderService.getQuery('name', query.name)
        const birthDate = this.queryBuilderService.getQuery('birthDate', query.birthDate)
        const weight = this.queryBuilderService.getQuery('weight', query.weight)
        const height = this.queryBuilderService.getQuery('height', query.height)
        const bloodType = this.queryBuilderService.getQuery('bloodType', query.bloodType)
        const photo = this.queryBuilderService.getQuery('photo', query.photo)
        const zipCode = this.queryBuilderService.getQuery('zipCode', query.zipCode)
        const street = this.queryBuilderService.getQuery('street', query.street)
        const number = this.queryBuilderService.getQuery('number', query.number)
        const complement = this.queryBuilderService.getQuery('complement', query.complement)
        const district = this.queryBuilderService.getQuery('district', query.district)
        const city = this.queryBuilderService.getQuery('city', query.city)
        const state = this.queryBuilderService.getQuery('state', query.state)

        const caregiverId = this.queryBuilderService.getQuery('caregiver_id', query.caregiverId)

        const patients = await Patient.query()
          .with('allergies')
          .with('diseases')
          .with('caregivers')
          .whereRaw(name)
          .whereRaw(birthDate)
          .whereRaw(weight)
          .whereRaw(height)
          .whereRaw(bloodType)
          .whereRaw(photo)
          .whereRaw(zipCode)
          .whereRaw(street)
          .whereRaw(number)
          .whereRaw(complement)
          .whereRaw(district)
          .whereRaw(city)
          .whereRaw(state)
          .innerJoin('caregiver_patients', 'caregiver_patients.patient_id', 'patients.id')
          .innerJoin('caregivers', 'caregiver_patients.caregiver_id', 'caregivers.id')
          .whereRaw(caregiverId).fetch()

        return await patients;
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

    async insertImage( { params, request }) {

        const patient = await Patient.find(params.id);

        const uploadedImage = await this.cloudinaryStorageService.upload(request.file('image'));

        patient.photo = uploadedImage;

        patient.save()

        return patient;
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
