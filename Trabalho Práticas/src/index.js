const express = require('express')
const rote = require('./routes/route')
const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use('/', rote)
app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs')

const porta = 3000
app.listen(porta, () => console.log(`Servidor rodando na porta ${porta}`))