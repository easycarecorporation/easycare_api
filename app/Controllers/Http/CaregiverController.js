'use strict'

const Caregiver = use('App/Models/Caregiver')

class CaregiverController {

    async index({ request, response }) {

        const caregiver = await Caregiver.all()

        return caregiver
    }

    async show({ params, request, response }) {

        const caregiver = await Caregiver.find(params.id)
        
        return caregiver
    }

    async store({ request, response }) {

        const data = request.only(['name', 'gender', 'document'])

        const caregiver = await Caregiver.create(data)

        return caregiver
    }

    async update({ params, request, response }) {

        const data = request.all()

        const caregiver = await Caregiver.find(params.id)

        caregiver.merge(data)
        await caregiver.save()

        return caregiver 
    }

    async destroy({ params, request, response }) {

        const caregiver = await Caregiver.find(params.id)

        caregiver.delete()

        return caregiver
    }
}

module.exports = CaregiverController
