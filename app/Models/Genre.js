'use strict'

const Model = use('Model')

class Genre extends Model {
  static boot() {
    super.boot()
  }

  animes() {
    return this.belongsToMany('App/Models/Anime')
  }
}

module.exports = Genre
