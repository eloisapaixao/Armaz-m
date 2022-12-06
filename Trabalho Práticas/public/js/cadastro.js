const txt1 = document.querySelector('#txt1')
const txt2 = document.querySelector('#txt2')
const txt3 = document.querySelector('#txt3')
const txt4 = document.querySelector('#txt4')
const txt5 = document.querySelector('#txt5')
const txt6 = document.querySelector('#txt6')
const txt7 = document.querySelector('#txt7')
const txt8 = document.querySelector('#txt8')

// document.querySelector('#imgInterface').addEventListener('click', () => c('aside').classList.toggle('show'))

document.querySelector('#btn1').addEventListener('click', () => {
    const usuario = {
        email: txt1.value,
        senha: txt2.value,
    }

    console.log(usuario)

    axios.post('/usuarios/entrar', usuario).then((response) => window.location.href = '/').catch(() => alert('Email ou senha incorreta!'))
})

document.querySelector('#btn2').addEventListener('click', () => {
    const usuario = {
        nome: txt3.value,
        telefone: txt4.value,
        CPF: txt5.value,
        endereço: txt6.value,
        email: txt7.value,
        senha: txt8.value
    }

    axios.post('/usuarios/registrar', usuario).then((response) => window.location.href = '/')
})