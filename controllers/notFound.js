const notFound = require(`express`).Router()

notFound.get(`/`, (req,res) => {
    res.render(`404`, {
        title: `Not Found`
    })
})

module.exports = notFound