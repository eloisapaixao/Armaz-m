const express = require('express')
const rote = require('./routes/route')
const app = express()
const path = require('path')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use('/', rote)
app.use(express.static('public'))

app.use('/css', express.static('/public/css'))
app.use('/imagens', express.static('/public/imagens'))
app.use('/js', express.static('/public/js'))
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

const porta = 3000
app.listen(porta, () => console.log(`Servidor rodando na porta ${porta}`))