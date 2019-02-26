'use strict'
const Anime = use('App/Models/Anime')

class DashboardController {
    async getDashboardElements({ request, response }){
        console.log(request.headers())
        return await Anime.first()
    }
}

module.exports = DashboardController
