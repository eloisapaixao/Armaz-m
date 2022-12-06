const mongoose = require('mongoose');
//Define a schema
const Schema = mongoose.Schema
const userSchema = new Schema({
    nome: String,
    telefone: String,
    CPF: String,
    endereço: String,
    email: String,
    senha: String
},{collection: 'users'}
)
module.exports = {UserSchema: userSchema}