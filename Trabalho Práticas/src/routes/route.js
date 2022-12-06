const express = require('express')
const controller = require('../controllers/controller')
const router = express.Router()

router.get('/', controller.sitePrincipal)
router.get('/doces', controller.doces)
router.get('/cadastro', controller.cadastro)
router.get('/carboidratos', controller.carboidratos)
router.get('/semGluten', controller.semGluten)
router.get('/semLactose', controller.semLactose)
router.get('/veganos', controller.veganos)
router.get('/vegetais', controller.vegetais)

router.post('/usuarios/entrar', controller.entrarUsuario)
router.post('/usuarios/registrar',controller.registrarUsuario)

module.exports = router