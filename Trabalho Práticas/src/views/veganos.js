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
    {id:1, name:'Aspargos', img:'/public/imagens/aspargos.jpg', price:[100.00, 150.00, 200.00], description:''},
    {id:2, name:'Amêndoa laminada della terra', img:'/public/imagens/amendoa laminada della terra.jpg', price:[100.00, 150.00, 200.00], sizes:['1/72', '1/48', '1/32'], description:''},
    {id:3, name:'Arroz branco cami', img:'/public/imagens/arroz branco camil.jpg', price:[100.00, 150.00, 200.00], sizes:['1/72', '1/48', '1/32'], description:''},
    {id:4, name:'Arroz branco prato fino', img:'/public/imagens/arroz branco prato fino.jpeg', price:[100.00, 150.00, 200.00], sizes:['1/72', '1/48', '1/32'], description:''},
    {id:5, name:'Arroz integral camil', img:'/public/imagens/arroz integral camil.png', price:[100.00, 150.00, 200.00], sizes:['1/72', '1/48', '1/32'], description:''},
    {id:6, name:'Aveia em flocos finos jasmine', img:'/public/imagens/aveia em flocos finos jasmine.png', price:[100.00, 150.00, 200.00], sizes:['1/72', '1/48', '1/32'], description:''},
    {id:7, name:'Aveia em flocos finos quaker', img:'/public/imagens/aveia em flocos finos quaker.png', price:[100.00, 150.00, 200.00], sizes:['1/72', '1/48', '1/32'], description:''},
    {id:8, name:'Aveia em flocos grandes jasmine', img:'/public/imagens/aveia em flocos grandes jasmine.png', price:[100.00, 150.00, 200.00], sizes:['1/72', '1/48', '1/32'], description:''},
    {id:9, name:'Aveia em flocos grandes quaker', img:'/public/imagens/aveia em flocos grandes quaker.png', price:[100.00, 150.00, 200.00], sizes:['1/72', '1/48', '1/32'], description:''},
    {id:10, name:'Azeite andorinha', img:'/public/imagens/azeite andorinha.jpg', price:[100.00, 150.00, 200.00], sizes:['1/72', '1/48', '1/32'], description:''},
    {id:11, name:'Azeite borges', img:'/public/imagens/azeite borges.png', price:[100.00, 150.00, 200.00], sizes:['1/72', '1/48', '1/32'], description:''},
    {id:12, name:'Azeite gallo', img:'/public/imagens/azeite gallo.png', price:[100.00, 150.00, 200.00], sizes:['1/72', '1/48', '1/32'], description:''},
    {id:13, name:'Beterraba', img:'/public/imagens/beterraba.jpg', price:[100.00, 150.00, 200.00], sizes:['1/72', '1/48', '1/32'], description:''},
    {id:14, name:'Brocolis', img:'/public/imagens/brocolis.jpg', price:[100.00, 150.00, 200.00], sizes:['1/72', '1/48', '1/32'], description:''},
    {id:15, name:'Brotos de feijao moyashi', img:'/public/imagens/brotos de feijao moyashi.jpg', price:[100.00, 150.00, 200.00], sizes:['1/72', '1/48', '1/32'], description:''},
    {id:16, name:'Cacau em po dr.oetker', img:'/public/imagens/cacau em po dr.oetker.png', price:[100.00, 150.00, 200.00], sizes:['1/72', '1/48', '1/32'], description:''},
    {id:17, name:'Cacau em po nestle', img:'/public/imagens/cacau em po nestle.png', price:[100.00, 150.00, 200.00], sizes:['1/72', '1/48', '1/32'], description:''},
    {id:18, name:'Café em grãos baggio', img:'/public/imagens/café em grãos baggio.jpg', price:[100.00, 150.00, 200.00], sizes:['1/72', '1/48', '1/32'], description:''},
    {id:19, name:'Café em grãos fazenda diamantina', img:'/public/imagens/café em grãos fazenda diamantina.jpg', price:[100.00, 150.00, 200.00], sizes:['1/72', '1/48', '1/32'], description:''},
    {id:20, name:'Café em grãos native', img:'/public/imagens/café em grãos native.png', price:[100.00, 150.00, 200.00], sizes:['1/72', '1/48', '1/32'], description:''},
    {id:21, name:'Canela em po aroma de ervas', img:'/public/imagens/canela em po aroma de ervas.jpg', price:[100.00, 150.00, 200.00], sizes:['1/72', '1/48', '1/32'], description:''},
    {id:22, name:'Canela em po kitano', img:'/public/imagens/canela em po kitano.png', price:[100.00, 150.00, 200.00], sizes:['1/72', '1/48', '1/32'], description:''},
    {id:23, name:'Cenoura', img:'/public/imagens/cenoura.png', price:[100.00, 150.00, 200.00], sizes:['1/72', '1/48', '1/32'], description:''},
    {id:24, name:'Chia mae terra', img:'/public/imagens/chia mae terra.jpg', price:[100.00, 150.00, 200.00], sizes:['1/72', '1/48', '1/32'], description:''},
    {id:35, name:'Couve', img:'/public/imagens/couve.jpg', price:[100.00, 150.00, 200.00], sizes:['1/72', '1/48', '1/32'], description:''},
    {id:36, name:'Espinafre', img:'/public/imagens/espinafre.jpg', price:[100.00, 150.00, 200.00], sizes:['1/72', '1/48', '1/32'], description:''},
    {id:37, name:'Farinha de amêndoas', img:'/public/imagens/farinha de amendoas ingredientes online.jpg', price:[100.00, 150.00, 200.00], sizes:['1/72', '1/48', '1/32'], description:''},
    {id:38, name:'Farinha de aveia jasmine', img:'/public/imagens/farinha de aveia jasmine.png', price:[100.00, 150.00, 200.00], sizes:['1/72', '1/48', '1/32'], description:''},
    {id:39, name:'Farinha de aveia quaker', img:'/public/imagens/farinha de aveia quaker.png', price:[100.00, 150.00, 200.00], sizes:['1/72', '1/48', '1/32'], description:''},
    {id:40, name:'Feijão carioca broto legal', img:'/public/imagens/feijao carioca broto legal.jpg', price:[100.00, 150.00, 200.00], sizes:['1/72', '1/48', '1/32'], description:''},
    {id:41, name:'Feijão carioca camil', img:'/public/imagens/feijao carioca camil.png', price:[100.00, 150.00, 200.00], sizes:['1/72', '1/48', '1/32'], description:''},
    {id:42, name:'Feijão preto broto legal', img:'/public/imagens/feijao preto broto legal.jpg', price:[100.00, 150.00, 200.00], sizes:['1/72', '1/48', '1/32'], description:''},
    {id:43, name:'Granola sem açúcar jasmine', img:'/public/imagens/granola sem acucar jasmine.png', price:[100.00, 150.00, 200.00], sizes:['1/72', '1/48', '1/32'], description:''},
    {id:44, name:'Granola sem açúcar mae terra', img:'/public/imagens/granola sem acucar mae terra.png', price:[100.00, 150.00, 200.00], sizes:['1/72', '1/48', '1/32'], description:''},
    {id:45, name:'Grão de bico camil', img:'/public/imagens/grao de bico camilç.png', price:[100.00, 150.00, 200.00], sizes:['1/72', '1/48', '1/32'], description:''},
    {id:46, name:'Grãos de quinoa mãe terra', img:'/public/imagens/grãos de quinoa mãe terra.jpg', price:[100.00, 150.00, 200.00], sizes:['1/72', '1/48', '1/32'], description:''},
    {id:47, name:'Grãos de quinoa vapza', img:'/public/imagens/grãos de quinoa vapza.png', price:[100.00, 150.00, 200.00], sizes:['1/72', '1/48', '1/32'], description:''},
    {id:54, name:'Iogurte tradicional vegano vidaveg', img:'/public/imagens/iogurte tradicional vegano vidaveg.jpg', price:[100.00, 150.00, 200.00], sizes:['1/72', '1/48', '1/32'], description:''},
    {id:55, name:'Leite de arroz com amendoas risovita', img:'/public/imagens/leite de arroz com amendoas risovita.png', price:[100.00, 150.00, 200.00], sizes:['1/72', '1/48', '1/32'], description:''},
    {id:56, name:'', img:'/public/imagens/leite de arroz com avela isolabio.jpg', price:[100.00, 150.00, 200.00], sizes:['1/72', '1/48', '1/32'], description:''},
    {id:57, name:'', img:'/public/imagens/leite de soja ades.jpg', price:[100.00, 150.00, 200.00], sizes:['1/72', '1/48', '1/32'], description:''},
    {id:60, name:'', img:'/public/imagens/lentilhas camil.png', price:[100.00, 150.00, 200.00], sizes:['1/72', '1/48', '1/32'], description:''},
    {id:61, name:'', img:'/public/imagens/lentilhas yoki.png', price:[100.00, 150.00, 200.00], sizes:['1/72', '1/48', '1/32'], description:''},
    {id:65, name:'', img:'/public/imagens/milho congelado grano.jpg', price:[100.00, 150.00, 200.00], sizes:['1/72', '1/48', '1/32'], description:''},
    {id:66, name:'', img:'/public/imagens/milho para pipoca yoki.png', price:[100.00, 150.00, 200.00], sizes:['1/72', '1/48', '1/32'], description:''},
    {id:71, name:'', img:'/public/imagens/oleo de coco copra.png', price:[100.00, 150.00, 200.00], sizes:['1/72', '1/48', '1/32'], description:''},
    {id:70, name:'', img:'/public/imagens/nozes armazem bezerra.png', price:[100.00, 150.00, 200.00], sizes:['1/72', '1/48', '1/32'], description:''},
    {id:71, name:'', img:'/public/imagens/oleo de coco copra.png', price:[100.00, 150.00, 200.00], sizes:['1/72', '1/48', '1/32'], description:''},
    {id:72, name:'', img:'/public/imagens/oleo de coco qualicoco.png', price:[100.00, 150.00, 200.00], sizes:['1/72', '1/48', '1/32'], description:''},
    {id:73, name:'', img:'/public/imagens/palmito espaguete ACM.jpg', price:[100.00, 150.00, 200.00], sizes:['1/72', '1/48', '1/32'], description:''},
    {id:74, name:'', img:'/public/imagens/pepino.jpg', price:[100.00, 150.00, 200.00], sizes:['1/72', '1/48', '1/32'], description:''},
    {id:75, name:'', img:'/public/imagens/pimentaoverde.jpg', price:[100.00, 150.00, 200.00], sizes:['1/72', '1/48', '1/32'], description:''},
    {id:78, name:'', img:'/public/imagens/queijo minas vegano basi.co.png', price:[100.00, 150.00, 200.00], sizes:['1/72', '1/48', '1/32'], description:''},
    {id:79, name:'', img:'/public/imagens/queijo minas vegano vidaveg.png', price:[100.00, 150.00, 200.00], sizes:['1/72', '1/48', '1/32'], description:''},
    {id:80, name:'', img:'/public/imagens/sementes de chia nat.png', price:[100.00, 150.00, 200.00], sizes:['1/72', '1/48', '1/32'], description:''},
    {id:81, name:'', img:'/public/imagens/smentes de chia vitalin.png', price:[100.00, 150.00, 200.00], sizes:['1/72', '1/48', '1/32'], description:''},
    {id:82, name:'', img:'/public/imagens/tapioca akio.png', price:[100.00, 150.00, 200.00], sizes:['1/72', '1/48', '1/32'], description:''},
    {id:83, name:'', img:'/public/imagens/tapioca da terrinha.png', price:[100.00, 150.00, 200.00], sizes:['1/72', '1/48', '1/32'], description:''},
    {id:84, name:'', img:'/public/imagens/tomate.jpg', price:[100.00, 150.00, 200.00], sizes:['1/72', '1/48', '1/32'], description:''}
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