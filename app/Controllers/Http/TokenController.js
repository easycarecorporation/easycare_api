'use strict'

const Token = use('App/Models/Token')

const QueryBuilderService = use('App/Services/QueryBuilderService')
const FirebaseAdminService = use('App/Services/FirebaseAdminService')

class TokenController {

    constructor() {
        this.queryBuilderService = new QueryBuilderService()
        this.firebaseAdminService = new FirebaseAdminService()
    }

    async index({ request }) {

        const query = request.get()

        const token = this.queryBuilderService.getQuery('token', query.token)
        const type = this.queryBuilderService.getQuery('type', query.type)
        const isRevoked = this.queryBuilderService.getQuery('is_revoked', query.isRevoked)
        const userId = this.queryBuilderService.getQuery('user_id', query.userId)

        const tokens = await Token.query()
            .with('user')
            .whereRaw(token)
            .whereRaw(type)
            .whereRaw(isRevoked)
            .whereRaw(userId)
            .fetch()

        return await tokens;
    }

    async show({ params }) {
        const token = await Token.find(params.id)

        return token;
    }

    async store({ request }) {
        const data = request.all();

        const token = await Token.create(data);

        return token;
    }

    async update({ params, request }) {

    }

    async destroy({ params }) {

    }
}

module.exports = TokenController
