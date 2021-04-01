'use strict'

const Caregiver = use('App/Models/Caregiver')

class CaregiverController {

    async index() {

        const caregiver = await Caregiver.all()

        return caregiver
    }

    async show({ params }) {

        const caregiver = await Caregiver.find(params.id)

        return caregiver
    }

    async documentAlreadyExists({ params }) {

        const caregiver = await Caregiver.findBy('document', params.document)

        if(caregiver) {

            return { exists: true }
        }

        return { exists: false }
    }

    async store({ request }) {

        const data = request.all()

        const caregiver = await Caregiver.create(data)

        return caregiver
    }

    async update({ params, request }) {

        const data = request.all()

        const caregiver = await Caregiver.find(params.id)

        caregiver.merge(data)
        await caregiver.save()

        return caregiver
    }

    async destroy({ params }) {

        const caregiver = await Caregiver.find(params.id)

        caregiver.delete()

        return caregiver
    }
}

module.exports = CaregiverController
