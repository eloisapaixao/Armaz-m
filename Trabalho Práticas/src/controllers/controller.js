const db = require('../database/db')
const user = require('../models/user')

const Users = db.Mongoose.model('esquemaUsers', user.UserSchema, 'users')

exports.sitePrincipal = ('/', (requisicao, resposta) => {
    return resposta.render('sitePrincipal')
})

exports.cadastro = ('/cadastro', (requisicao, resposta) => {
    return resposta.render('cadastro')
})

exports.doces = ('/doces', (requisicao, resposta) => {
    return resposta.render('doces')
})

exports.carboidratos = ('/carboidratos', (requisicao, resposta) => {
    return resposta.render('carboidratos')
})

exports.semGluten = ('/semGluten', (requisicao, resposta) => {
    return resposta.render('semGluten')
})

exports.semLactose = ('/semLactose', (requisicao, resposta) => {
    return resposta.render('semLactose')
})

exports.veganos = ('/veganos', (requisicao, resposta) => {
    return resposta.render('veganos')
})

exports.vegetais = ('/vegetais', (requisicao, resposta) => {
    return resposta.render('vegetais')
})

exports.registrarUsuario = ('/usuarios/registrar', async (requisicao, resposta) => {
    let username = requisicao.body.username
    let email = requisicao.body.email
    let usuario = new Users({ username, email })

    try {
        await usuario.save()
        return resposta.redirect('/sitePrincipal')
    }
    catch (err) {
        next(err)
    }
})
