'use strict'

const Model = use('Model')

class Anime extends Model {
  episodes() {
    return this.hasMany('App/Models/Episode')
  }

  genre() {
    return this.belongsToMany('App/Models/Genre')
  }
}

module.exports = Anime
