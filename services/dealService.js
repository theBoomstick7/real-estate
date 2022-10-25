const {Deal} = require(`../models/Deal`)

async function getAll(){
    return Deal.find({}).limit(3).lean()
}
async function getAllCatalog(){
    return Deal.find({}).lean()
}
async function getById(id) {
    return Deal.findById(id).lean()
}

async function deleteById(id) {
    return Deal.findByIdAndDelete(id)
}

async function create(data){
    return Deal.create(data)
}




module.exports = {
    getAll,
    getById,
    deleteById,
    create,
    getAllCatalog
}