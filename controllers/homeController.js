const { getAll } = require("../services/dealService")

const homeController = require(`express`).Router()

homeController.get (`/`, async (req,res) => {
        const deals = await getAll()    
    
    res.render(`home` , {
            title: `Home Page`, 
            deals
        })
})

module.exports = homeController