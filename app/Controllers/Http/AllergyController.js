'use strict'

const Allergy = use('App/Models/Allergy')

class AllergyController {

    async index() {
        
        const allergies = await Allergy.all()

        return allergies
    }

    async show({ params, request, response }) {
        
        const allergy = await Allergy.find(params.id)

        return allergy
    }

    async store({ request, response }) {

        const data = request.all()

        const allergy = await Allergy.create(data)

        return allergy
    }

    async update({ params, request, response }) {
        
        const data = request.all()

        const allergy = await Allergy.find(params.id)

        allergy.merge(data)
        await allergy.save()

        return allergy
    }

    async destroy({ params, request, respons }) {

        const allergy = Allergy.find(params.id)

        await allergy.delete()

        return allergy
    }
}

module.exports = AllergyController
