'use strict'

const User = use('App/Models/User')

class UserController {
    
    async auth({ request, auth }) {
        const { email, password } = request.all()

        const token = await auth.attempt(email, password)
    
        return token;
    }

    async index() {

        const users = await User.all();

        return users;
    }

    
    async show({ params }) {
        const user = await User.find(params.id)

        return user;
    }

    async store({ request }) {
        const data = request.only(['username', 'email', 'password']);

        const user = await User.create(data);

        return user;
    }

    async update({ params, request }) {
        const data = request.all()

        const user = await User.find(params.id)

        user.merge(data)
        await user.save()

        return user
    }

    async destroy({ params }) {

        const user = await User.find(params.id)

        user.delete()
        
        return user
    }

    async alreadyExists({ params }) {

        const user = await User.findBy('username', params.username)

        return user;
    }
}

module.exports = UserController
