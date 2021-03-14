'use strict'

class StoreBracelet {

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

module.exports = StoreBracelet
