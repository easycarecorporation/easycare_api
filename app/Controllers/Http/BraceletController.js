'use strict'

const Bracelet = use('App/Models/Bracelet')

class BraceletController {

    async index() {
        
        const bracelets = await Bracelet.all()

        return bracelets
    }

    async show({ params, request, response }) {
        
        const bracelet = await Bracelet.find(params.id)

        return bracelet
    }

    async store({ request, response }) {
       
        const data = request.only('model')

        const bracelet = await Bracelet.create(data)

        return bracelet
    }

    async update({ params, request, response }) {
        
        const data = request.all()

        const bracelet = await Bracelet.find(params.id)

        bracelet.merge(data)

        await bracelet.save()

        return bracelet
    }

    async destroy({ params, request, respons }) {

        const bracelet = await Bracelet.find(params.id)

        await bracelet.delete()

        return bracelet
    }
}

module.exports = BraceletController
