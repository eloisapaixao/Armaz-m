let time = 5000,
    currentImageIndex = 0,
    images = document.querySelectorAll("#slider img")
    max = images.length

function nextImage(){

    images[currentImageIndex].classList.remove("selected")

    currentImageIndex++

    if (currentImageIndex >= max)
        currentImageIndex = 0

    images[currentImageIndex].classList.add("selected")
}

function start(){
    setInterval(() => {
        //troca de imagens
        nextImage()
    }, time)  
}
window.addEventListener("load", start())

let modelsJson = [
    {id:16, name:'Cacau em pó Dr.Oetker', img:'/public/imagens/cacau em po dr.oetker.png', price:[100.00, 150.00, 200.00], description:'Cacau em pó solúvel, 100% cacau, 150g'},
    {id:17, name:'Cacau em pó Nestlé', img:'/public/imagens/cacau em po nestle.png', price:[100.00, 150.00, 200.00], description:'Cacau em pó 100% cacau, 200g, dois frades'},
    {id:25, name:'Chocolate amargo Hersheys', img:'/public/imagens/chocolate amargo hersheys.png', price:[100.00, 150.00, 200.00], description:'Chocolate amargo 40%, 92g'},
    {id:26, name:'Chocolate ao leite Lacta', img:'/public/imagens/chocolate ao leite lacta.png', price:[100.00, 150.00, 200.00], description:'Chocolate ao leite 92g'},
    {id:27, name:'Chocolate ao leite Nestlé', img:'/public/imagens/chocolate ao leite nestle.png', price:[100.00, 150.00, 200.00], description:'Chocolate ao leite 90g'},
    {id:28, name:'Chocolate meio amargo Nestlé', img:'/public/imagens/chocolate meio amargo nestle.png', price:[100.00, 150.00, 200.00], description:'Chocolate meio amargo 40%'},
    {id:29, name:'Chocolate Nugali', img:'/public/imagens/chocolate nugali.png', price:[100.00, 150.00, 200.00], description:'Chocolate sem glúten ao leite, 45%, 100g'},
    {id:30, name:'Chocolate Zeromilk', img:'/public/imagens/chocolate zeromilk.jpg', price:[100.00, 150.00, 200.00], description:'Chocolate 0% lactose,glúten e soja, 80g'},
    {id:67, name:'Pasta de amendoim com chocolate branco', img:'/public/imagens/Pasta de amendoim chocolate branco.jpg', price:[100.00, 150.00, 200.00], description:'Pasta de amendoim com chocolate branco, sem adição de açúcar, contém glúten, 150g'},
    {id:68, name:'Pasta de amendoim com cookies de chocolate', img:'/public/imagens/Pasta de amendoim cookies de chocolate.png', price:[100.00, 150.00, 200.00], description:'Pasta de amendoim com cookies de chocolate, contém glúten, 450g'},
    {id:69, name:'Pasta de amendoim sabor wafer de chocolate', img:'/public/imagens/naked nuts wafer de chocolate.png', price:[100.00, 150.00, 200.00], description:'Pasta de amendoim sabor wafer de chocolate, não contém glúten, 450g'}
];

let cart = []
let modalQt
let key = 0
const c = (el) => document.querySelector(el)
const cs = (el) => document.querySelectorAll(el)

modelsJson.map((item, index) => {
    let modelsItem = c('.produtos  .produtos-items').cloneNode(true)
    modelsItem.setAttribute('data-key', index)
    
    modelsItem.querySelector('.produtos-items-name').innerHTML = item.name
    modelsItem.querySelector('.produtos-items-desc').innerHTML = item.description
    modelsItem.querySelector('.produtos-items-price').innerHTML = `R$ ${item.price[0].toFixed(2)}`
    modelsItem.querySelector('.produtos-items-img img').src = item.img

    modelsItem.querySelector('a').addEventListener('click', (e) => {
        e.preventDefault();
        modalQt = 1
        key = e.target.closest('.produtos-items').getAttribute('data-key')
        c('.modelsBig img').src = modelsJson[key].img
        c('.modelsInfo h1').innerHTML = modelsJson[key].name
        c('.modelsInfo--desc').innerHTML = modelsJson[key].description
        c('.modelsInfo--atualprice').innerHTML = `R$ ${modelsJson[key].price[2].toFixed(2)}`
        c('.modelsInfo--qtd').innerHTML = modalQt
        c('.modelsWindowsArea').style.opacity = 0;
        c('.modelsWindowsArea').style.display = 'flex'
        setTimeout(() => {
            c('.modelsWindowsArea').style.opacity = 1;
        }, 200)
    })

    c('.produtos-area').append(modelsItem)
})

//Ações do modal - janela
function closeModal(){
    c('.modelsWindowsArea').style.opacity = 0;
    setTimeout(() => {
        c('.modelsWindowsArea').style.display ='none'
    }, 500)
}

cs('.modelsInfo--cancelButton, .modelsInfo--cancelMobileButton').forEach((item) => {
    item.addEventListener('click', closeModal)
})

c('.modelsInfo--qtdmenos').addEventListener('click', ()=>{
    if(modalQt > 1){
        modalQt--
    c('.modelsInfo--qtd').innerHTML = modalQt
    }
})

c('.modelsInfo--qtdmais').addEventListener('click', ()=>{
    modalQt++
    c('.modelsInfo--qtd').innerHTML = modalQt
})

c('.modelsInfo--addButton').addEventListener('click', () => {
    let identifier = modelsJson[key].id+'@'
    let localId = cart.findIndex((item) => item.identifier == identifier)
    if (localId > -1)
    {
        cart[localId].qt += modalQt
    }
    else
    {
        cart.push({
            identifier,
            id:modelsJson[key].id,
            qt:modalQt
        })    
    }
    updateCart()
    closeModal()
})

function carrinho(){
    if(cart.length > 0){
        c('aside').style.left = '0'
    }
}

c('.menu-closer').addEventListener('click', () => {
    c('aside').style.left = '100vw'
})

c('.cart-finalizar').addEventListener('click', () => {
    cart = []
    updateCart()
})

function updateCart(){
    if(cart.length > 0){
        c('aside').classList.add('show')
        c('.cart').innerHTML = ''
        let subtotal = 0
        let desconto = 0
        let total = 0
        cart.map((itemCart, index) => {
            let modelItem = modelsJson.find((itemBD) => itemBD.id == itemCart.id)
            subtotal += modelItem.price * itemCart.qt
            
            let cartItem = c('.produtos .cart-item').cloneNode(true)
            cartItem.querySelector('img').src = modelItem.img
            cartItem.querySelector('.cart-item-nome').innerHTML = modelItem.name
            cartItem.querySelector('.cart-item-qtd').innerHTML = itemCart.qt
            // cartItem.querySelector('.cart-item-qtdmenos').addEventListener('click', () => {
            //     if(itemCart.qt > 1)
            //     {
            //         itemCart.qt--
            //     }
            //     else
            //     {
            //         cart.splice(index, 1)
            //     }
            //     updateCart()
            // })
            // cartItem.querySelector('.cart-item-qtdmais').addEventListener('click', () => {
            //    itemCart.qt++
            //    updateCart()
            // })

            c('.cart').append(cartItem)
        })
        desconto = subtotal * 0.1
        total = subtotal - desconto
        c('.subtotal span:last-child').innerHTML = `R$ ${subtotal.toFixed(2)}`
        c('.desconto span:last-child').innerHTML = `R$ ${desconto.toFixed(2)}`
        c('.total span:last-child').innerHTML = `R$ ${total.toFixed(2)}`
    }
    else
    {
        c('aside').classList.remove('show')
        c('aside').style.left = '100vw'
    }
}

function cadastrar(){
    c('.cadastrar').classList.add('show')
}