'use strict'

class StoreCaregiver {

  async fails(errorMessages) {
    return this.ctx.response.status(422).json(errorMessages);
  }

  get rules () {
    return {
      name: 'required',
      gender: 'required',
      document: 'required:unique:caregivers',
      user_id: 'required'
    }
  }

  get messages() {
    return {
      'name.required': 'O nome deve ser informado',
      'gender.required': 'O gênero deve ser informado',
      'document.required': 'O documento deve ser informado',
      'document.unique': 'O documento já foi cadastrado',
      'user_id.required': 'O usuário deve ser informado'
    }
  }
}

module.exports = StoreCaregiver
