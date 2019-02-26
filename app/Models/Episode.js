'use strict'

const Model = use('Model')

class Episode extends Model {
  static boot() {
    super.boot()
  }

  anime() {
    return this.belongsTo('App/Models/Anime')
  }
}

module.exports = Episode
