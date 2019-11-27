const express = require("express")
const router = express.Router()
const controller = require("../controllers/professorasController")
const authMiddleware = require('../middlewares/auth')// requer a autenticacao

router.get("/", controller.get)
router.use(authMiddleware);// esta protegido a partir desta etapa
router.get("/:id", controller.getById)
router.post("/", controller.post)

module.exports = router
