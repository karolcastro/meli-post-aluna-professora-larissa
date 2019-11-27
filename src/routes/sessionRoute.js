const express = require("express")
const router = express.Router()
const controller = require("../controllers/sessionController")

router.post('/', controller.getToken)// envio das informacoes pelo token

module.exports = router