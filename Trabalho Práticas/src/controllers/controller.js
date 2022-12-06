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
    console.log(requisicao.body)

    const usuario = new Users(requisicao.body)

    try {
        await usuario.save()
        return resposta.status(201).send({ mensagem: 'Usuário criado' })
    }
    catch (err) {
        next(err)
    }
})

exports.entrarUsuario = ('/usuarios/entrar', async (requisicao, resposta) => {
    let email = requisicao.body.email
    let senha = requisicao.body.senha

    Users.findOne({ email }, (erro, usuario) => {
        if (erro)
            return resposta.status(500).send({ erro: 'Erro ao consultar usuário' })

        if (usuario.senha === senha)
            return resposta.status(200).send({ mensagem: 'Usuário autenticado' })

        return resposta.status(401).send({ mensagem: 'Usuário não autenticado' })
    })
})

