'use strict'

class CaregiverUpdateCaregiver {

  get rules () {
    return {
      name: 'required',
      gender: 'required',
      document: 'required:unique:caregivers',
      userId: 'required'
    }
  }

  get messages() {
    return {
      'name.required': 'O nome deve ser informado',
      'gender.required': 'O gênero deve ser informado',
      'document.required': 'O documento deve ser informado',
      'document.unique': 'O documento já foi cadastrado',
      'userId.required': 'O usuário deve ser informado'
    }
  }
}

module.exports = CaregiverUpdateCaregiver
