'use strict'

class StorePatient {

  async fails(errorMessages) {
    return this.ctx.response.status(422).json(errorMessages);
  }

  get rules() {
    return {
      'name': 'required',
      'birth_date': 'required',
      'weight': 'required',
      'height': 'required',
      'blood_type': 'required',
      'photo': 'required',
      'zip_code': 'required',
      'street': 'required',
      'district': 'required',
      'city': 'required',
      'state': 'required',
      'bracelet_id': 'required',
    }
  }

  get messages() {
    return {
      'name.required': 'O nome deve ser informado.',
      'birth_date.required': 'A data de nascimento deve ser informado.',
      'weight.required': 'O peso deve ser informado.',
      'height.required': 'A altura deve ser informada.',
      'blood_type.required': 'O tipo de sangue deve ser informado.',
      'photo.required': 'Uma foto deve ser informada.',
      'zip_code.required': 'O CEP deve ser informado.',
      'street.required': 'A rua deve ser informada.',
      'district.required': 'O bairro deve ser informado.',
      'city.required': 'A cidade deve ser informada.',
      'state.required': 'O estado deve ser informado.',
      'bracelet_id.required': 'O id da pulseira deve ser informado.',
    }
  }
}

module.exports = StorePatient
