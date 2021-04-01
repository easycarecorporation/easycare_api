'use strict'

const Disease = use('App/Models/Disease')

class DiseaseController {

    async index() {

        const diseases = await Disease.all()

        return diseases
    }

    async show({ params }) {

        const disease = await Disease.find(params.id)

        return disease
    }

    async store({ request }) {

        const data = request.all()

        const disease = await Disease.create(data)

        return disease
    }

    async update({ params, request }) {

        const data = request.all()

        const disease = await Disease.find(params.id)

        disease.merge(data)
        await disease.save()

        return disease
    }

    async destroy({ params }) {

        const disease = await Disease.find(params.id)

        disease.delete()

        return disease
    }
}

module.exports = DiseaseController
