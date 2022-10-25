const { getAllCatalog, create, getById } = require("../services/dealService")
const { parseError } = require("../util/parser")

const dealController = require(`express`).Router()

dealController.get(`/catalog`, async (req,res) => {
    const deals = await getAllCatalog()

    res.render(`aprt-for-recent`,{
        title: `Catalog`,
        deals
    })
})

dealController.get(`/create`, async (req,res) => {
    res.render(`create`, {
        title: `Create Page`
    })
})

dealController.post(`/create`, async (req,res) => {
    const deal = {
        name: req.body.name,
        year: req.body.year,
        city: req.body.city,
        type: req.body.type,
        imageUrl: req.body.imageUrl,
        pieces: req.body.pieces,
        description: req.body.description,
        owner: req.user._id
    }

    try {
        await create(deal)
        res.redirect(`catalog`)
    } catch (error) {
        res.render(`create`, {
            title: `Create Page`,
            errors: parseError(error)
        })
    }
})

dealController.get(`/:id`, async(req,res) => {
    const deal = await getById(req.params.id)

    if(deal.owner.toString() == req.user._id.toString()){
        deal.isOwner = true
    } else
    {
        deal.isOwner = false
    }
    
    res.render(`details`, {
        title: `Property Details`,
        deal
    })
})

module.exports = dealController