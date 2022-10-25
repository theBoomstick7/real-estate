const authController = require("../controllers/authController")
const dealController = require("../controllers/dealController")
const homeController = require("../controllers/homeController")
const notFound = require("../controllers/notFound")

module.exports = (app) => {
    app.use(`/`, homeController)
    app.use(`/auth`, authController)
    app.use(`/deals`, dealController)
    app.use(`*`, notFound)
}