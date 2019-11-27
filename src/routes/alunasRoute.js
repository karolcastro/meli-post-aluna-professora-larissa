const express = require("express")
const router = express.Router()
const controller = require("../controllers/alunasController")
const authMiddleware = require('../middlewares/auth')

router.get("/", controller.get)// somente a rota que tiver '/' esta aberta ao publico o restante tem que ter o token
router.use(authMiddleware)// assim que passa por esta rota somente quem tem o token tem acesso as demais rotas
router.get("/nasceuSp", controller.getSp)
router.get("/:id", controller.getById)
router.get("/:id/books", controller.getBooks)
router.get("/:id/getAge", controller.getAge)
router.post("/", controller.post)
router.post("/:id/books", controller.postBooks)

module.exports = router
