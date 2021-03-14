'use strict'

class UpdateBracelet {

  async fails(errorMessages) {
    return this.ctx.response.status(422).json(errorMessages);
  }
  
  get rules () {
    return {
      model: 'required',
    }
  }

  get messages() {
    return {
      'model.required': 'O modelo deve ser informado',
    }
  }
}

module.exports = UpdateBracelet
