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
    {id:1, name:'Aspargos', img:'/public/imagens/aspargos.jpg', price:[100.00, 150.00, 200.00], description:'Aspargos frescos orgânicos'},
    {id:2, name:'Amêndoa laminada Della Terra', img:'/public/imagens/amendoa laminada della terra.jpg', price:[100.00, 150.00, 200.00], description:'Amêndoa laminada embalada'},
    {id:3, name:'Arroz branco Camil', img:'/public/imagens/arroz branco camil.jpg', price:[100.00, 150.00, 200.00], description:'Arroz branco 1kg tipo 1'},
    {id:4, name:'Arroz branco Prato Fino', img:'/public/imagens/arroz branco prato fino.jpeg', price:[100.00, 150.00, 200.00], description:'Arroz branco 1kg tipo 1'},
    {id:5, name:'Arroz integral Camil', img:'/public/imagens/arroz integral camil.png', price:[100.00, 150.00, 200.00], description:'Arroz integral 1kg tipo 1'},
    {id:10, name:'Azeite Andorinha', img:'/public/imagens/azeite andorinha.jpg', price:[100.00, 150.00, 200.00], description:'Azeite extra virgem, azeite de oliva, 500ml'},
    {id:11, name:'Azeite Borges', img:'/public/imagens/azeite borges.png', price:[100.00, 150.00, 200.00], description:'Azeite extra virgem, azeite de oliva, 500ml'},
    {id:12, name:'Azeite Gallo', img:'/public/imagens/azeite gallo.png', price:[100.00, 150.00, 200.00], description:'Azeite extra virgem, azeite de oliva, 500ml, clássico'},
    {id:13, name:'Beterraba', img:'/public/imagens/beterraba.jpg', price:[100.00, 150.00, 200.00], description:'Beterraba fresca orgânica'},
    {id:14, name:'Brócolis', img:'/public/imagens/brocolis.jpg', price:[100.00, 150.00, 200.00], description:'Brócolis fresco orgânico'},
    {id:15, name:'Brotos de feijao moyashi', img:'/public/imagens/brotos de feijao moyashi.jpg', price:[100.00, 150.00, 200.00], description:'Brotos de feijão 500g, natural'},
    {id:16, name:'Cacau em pó Dr.Oetker', img:'/public/imagens/cacau em po dr.oetker.png', price:[100.00, 150.00, 200.00], description:'Cacau em pó solúvel, 100% cacau, 150g'},
    {id:17, name:'Cacau em pó Nestlé', img:'/public/imagens/cacau em po nestle.png', price:[100.00, 150.00, 200.00], description:'Cacau em pó 100% cacau, 200g, dois frades'},
    {id:18, name:'Café em grãos Baggio', img:'/public/imagens/café em grãos baggio.jpg', price:[100.00, 150.00, 200.00], description:'Café em grãos 250g, Bourbon'},
    {id:19, name:'Café em grãos fazenda Diamantina', img:'/public/imagens/café em grãos fazenda diamantina.jpg', price:[100.00, 150.00, 200.00], description:'Café em grãos 500g, 100% Arábica'},
    {id:20, name:'Café em grãos Native', img:'/public/imagens/café em grãos native.png', price:[100.00, 150.00, 200.00], description:'Café em grãos orgânico, espresso, 100% arábica, 500g'},
    {id:21, name:'Canela em pó aroma de ervas', img:'/public/imagens/canela em po aroma de ervas.jpg', price:[100.00, 150.00, 200.00], description:'Canela em pó 50g'},
    {id:22, name:'Canela em pó Kitano', img:'/public/imagens/canela em po kitano.png', price:[100.00, 150.00, 200.00], description:'Canela em pó 100%, 50g'},
    {id:23, name:'Cenoura', img:'/public/imagens/cenoura.png', price:[100.00, 150.00, 200.00], description:'Cenoura fresca orgânica'},
    {id:24, name:'Chia Mãe Terra', img:'/public/imagens/chia mae terra.jpg', price:[100.00, 150.00, 200.00], description:'Chia orgânica, 100% integral, 100g'},
    {id:29, name:'Chocolate Nugali', img:'/public/imagens/chocolate nugali.png', price:[100.00, 150.00, 200.00], description:'Chocolate sem glúten ao leite, 45%, 100g'},
    {id:30, name:'Chocolate Zeromilk', img:'/public/imagens/chocolate zeromilk.jpg', price:[100.00, 150.00, 200.00], description:'Chocolate 0% lactose,glúten e soja, 80g'},
    {id:31, name:'Coalhada desnatada Ati Latte', img:'/public/imagens/coalhada desnatada ati latte.png', price:[100.00, 150.00, 200.00], description:'Coalhada desnatada 170g'},
    {id:32, name:'Cottage Balkis', img:'/public/imagens/cottage balkis[.jpg', price:[100.00, 150.00, 200.00], description:'Queijo Cottage 50g'},
    {id:33, name:'Cottage Taeq', img:'/public/imagens/cottage taeq.jpg', price:[100.00, 150.00, 200.00], description:'Queijo Cotagge 400g'},
    {id:34, name:'Cottage Verde campo', img:'/public/imagens/cottage verde campo.png', price:[100.00, 150.00, 200.00], description:'Queijo Cotagge 200g'},
    {id:35, name:'Couve', img:'/public/imagens/couve.jpg', price:[100.00, 150.00, 200.00], description:'Couve fresca e orgânica'},
    {id:36, name:'Espinafre', img:'/public/imagens/espinafre.jpg', price:[100.00, 150.00, 200.00], description:'Espinafre fresco e orgânico'},
    {id:40, name:'Feijão carioca Broto Legal', img:'/public/imagens/feijao carioca broto legal.jpg', price:[100.00, 150.00, 200.00], description:'Feijão 1kg'},
    {id:41, name:'Feijão carioca Camil', img:'/public/imagens/feijao carioca camil.png', price:[100.00, 150.00, 200.00], description:'Feijão 1kg'},
    {id:42, name:'Feijão preto Broto Legal', img:'/public/imagens/feijao preto broto legal.jpg', price:[100.00, 150.00, 200.00], description:'Feijão preto 1kg'},
    {id:43, name:'Granola sem açúcar Jasmine', img:'/public/imagens/granola sem acucar jasmine.png', price:[100.00, 150.00, 200.00], description:'Granola sem açúcar vegana, tradicional, 850g'},
    {id:44, name:'Granola sem açúcar Mãe Terra', img:'/public/imagens/granola sem acucar mae terra.png', price:[100.00, 150.00, 200.00], description:'Granola sem açúcar 100% integrais, 800g'},
    {id:45, name:'Grão de bico Camil', img:'/public/imagens/grao de bico camilç.png', price:[100.00, 150.00, 200.00], description:'Grão de bico 500g'},
    {id:46, name:'Grãos de quinoa Mãe Terra', img:'/public/imagens/grãos de quinoa mãe terra.jpg', price:[100.00, 150.00, 200.00], description:'Grãos de quinoa orgânico, 100% integral, 250g'},
    {id:47, name:'Grãos de quinoa Vapza', img:'/public/imagens/grãos de quinoa vapza.png', price:[100.00, 150.00, 200.00], description:'Grãos de quinoa cozida no vapor orgânica, 250g'},
    {id:48, name:'Iogurte 0 lactose Activia', img:'/public/imagens/iogurte 0 lactose activia.png', price:[100.00, 150.00, 200.00], description:'Iogurte 0 lactose e açúcares, 0% gorduras 1kg'},
    {id:49, name:'Iogurte 0 lactose integral Ati Latte', img:'/public/imagens/iogurte 0 lactose integral ati latte.jpg', price:[100.00, 150.00, 200.00], description:'Iorgute 0 lactose integral 170g'},
    {id:50, name:'Iogurte desnatado natural Nestlé', img:'/public/imagens/iogurte desnatado natural nestle.png', price:[100.00, 150.00, 200.00], description:'Iorgute desnatado natural 160g'},
    {id:51, name:'Iogurte desnatado natural Taeq', img:'/public/imagens/iogurte desnatado natural taeq.png', price:[100.00, 150.00, 200.00], description:'Iogurte desnatado natural 160g'},
    {id:52, name:'Iogurte natural Battavo', img:'/public/imagens/iogurte natural battavo.jpg', price:[100.00, 150.00, 200.00], description:'Iogurte natural cremoso 500g, tradicional'},
    {id:53, name:'Iogurte natural Vigor', img:'/public/imagens/iogurte natural vigor.png', price:[100.00, 150.00, 200.00], description:'Iogurte natural 150g'},
    {id:54, name:'Iogurte tradicional vegano Vidaveg', img:'/public/imagens/iogurte tradicional vegano vidaveg.jpg', price:[100.00, 150.00, 200.00], description:'Iogurte tradicional vegano 130g'},
    {id:55, name:'Leite de arroz com amêndoas Risovita', img:'/public/imagens/leite de arroz com amendoas risovita.png', price:[100.00, 150.00, 200.00], description:'Leite de arroz com amêndoas 0% lactose e colesterol, 1L, sem adição de açúcares e sem glutén'},
    {id:56, name:'Leite de arroz com avelã Isolabio', img:'/public/imagens/leite de arroz com avela isolabio.jpg', price:[100.00, 150.00, 200.00], description:'Leite de arroz com avelã orgânico, não contém glúten, sem lactose, sem adição de açúcares, 1L'},
    {id:57, name:'Leite de soja Ades', img:'/public/imagens/Leite de soja ades.jpg', price:[100.00, 150.00, 200.00], description:'Leite de soja sabor original, zero adição de açúcares, 1L'},
    {id:59, name:'Leite em pó Molico desnatado', img:'/public/imagens/leite em po molico desnatado.png', price:[100.00, 150.00, 200.00], description:'Leite em pó desnatado 280g'},
    {id:60, name:'Lentilhas Camil', img:'/public/imagens/lentilhas camil.png', price:[100.00, 150.00, 200.00], description:'Lentilhas 500g'},
    {id:61, name:'Lentilhas Yoki', img:'/public/imagens/lentilhas yoki.png', price:[100.00, 150.00, 200.00], description:'Lentilha 500g'},
    {id:62, name:'Macarrão de milho Tivva', img:'/public/imagens/macarrao de milho tivva.jpg', price:[100.00, 150.00, 200.00], description:'Macarrão de milho sem glúten, sabor original, tipo penne, 500g'},
    {id:63, name:'Manteiga de coco Qualicoco com sal', img:'/public/imagens/manteiga de coco qualicoco com sal.png', price:[100.00, 150.00, 200.00], description:'Manteiga de coco com sal 200g'},
    {id:64, name:'Manteiga de coco qualicoco sem sal', img:'/public/imagens/manteiga de coco qualicoco sem sal.jpg', price:[100.00, 150.00, 200.00], description:'Manteiga de coco sem sal 200g'},
    {id:65, name:'Milho congelado Grano', img:'/public/imagens/milho congelado grano.jpg', price:[100.00, 150.00, 200.00], description:'Milho congelado 300g'},
    {id:66, name:'Milho para pipoca Yoki', img:'/public/imagens/milho para pipoca yoki.png', price:[100.00, 150.00, 200.00], description:'Milho para pipoca tipo 1, 500g'},
    {id:69, name:'Pasta de amendoim sabor wafer de chocolate', img:'/public/imagens/naked nuts wafer de chocolate.png', price:[100.00, 150.00, 200.00], description:'Pasta de amendoim sabor wafer de chocolate, não contém glúten, 450g'},
    {id:70, name:'Nozes armazém Bezerra', img:'/public/imagens/nozes armazem bezerra.png', price:[100.00, 150.00, 200.00], description:'Nozes frescas e embaladas'},
    {id:71, name:'Óleo de coco Copra', img:'/public/imagens/oleo de coco copra.png', price:[100.00, 150.00, 200.00], description:'Óleo de coco extravirgem, 500ml'},
    {id:72, name:'Óleo de coco Qualicoco', img:'/public/imagens/oleo de coco qualicoco.png', price:[100.00, 150.00, 200.00], description:'Óleo de coco extravirgem, 200ml'},
    {id:73, name:'Palmito espaguete ACM', img:'/public/imagens/palmito espaguete ACM.jpg', price:[100.00, 150.00, 200.00], description:'Palmito espaguete 300g'},
    {id:74, name:'Pepino', img:'/public/imagens/pepino.jpg', price:[100.00, 150.00, 200.00], description:'Pepino fresco e orgânico'},
    {id:75, name:'Pimentão verde', img:'/public/imagens/pimentaoverde.jpg', price:[100.00, 150.00, 200.00], description:'Pimentão verde fresco e orgânico'},
    {id:76, name:'Queijo minas Bandeira', img:'/public/imagens/queijo minas bandeira.png', price:[100.00, 150.00, 200.00], description:'Queijo minas fresco'},
    {id:77, name:'Queijo minas Danubio', img:'/public/imagens/queijo minas danubio.png', price:[100.00, 150.00, 200.00], description:'Queijo minas 500g'},
    {id:78, name:'Queijo minas vegano básico', img:'/public/imagens/queijo minas vegano basi.co.png', price:[100.00, 150.00, 200.00], description:'Queijo minas vegano com sal 360g'},
    {id:79, name:'Queijo minas vegano Vidaveg', img:'/public/imagens/queijo minas vegano vidaveg.png', price:[100.00, 150.00, 200.00], description:'Queijo minas vegano 250g, sem leite, zero lactose e sem glúten'},
    {id:80, name:'Sementes de chia Nat', img:'/public/imagens/sementes de chia nat.png', price:[100.00, 150.00, 200.00], description:'Sementes de chia orgânica 180g'},
    {id:81, name:'Sementes de chia Vitalin', img:'/public/imagens/smentes de chia vitalin.png', price:[100.00, 150.00, 200.00], description:'Sementes de chia 120g'},
    {id:84, name:'Tomate', img:'/public/imagens/tomate.jpg', price:[100.00, 150.00, 200.00], description:'Tomate fresco e orgânico'}
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