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
    {id:1, name:'F4F Wildcat', img:'aspargos.jpg', price:[100.00, 150.00, 200.00], description:'Caça utilizado nos primeiros anos de combate no pacífico pela marinha dos EUA'},
    {id:2, name:'Focke Wulf Fw190 A5', img:'img/Fw190A5.png', price:[100.00, 150.00, 200.00], sizes:['1/72', '1/48', '1/32'], description:'Caça de motor em estrela da Luftwaffe, temido em médias e baixas altitudes'},
    {id:3, name:'Ki 61 - Hien', img:'img/Ki61Hien.png', price:[100.00, 150.00, 200.00], sizes:['1/72', '1/48', '1/32'], description:'Caça fabricado pela Kawasaki para o exercito japones, com motor em linha'},
    {id:4, name:'Me 109 G6', img:'img/Me109G6.png', price:[100.00, 150.00, 200.00], sizes:['1/72', '1/48', '1/32'], description:'Famoso caça da Messerchmnitt, voado pelos maiores ases da Luftwaffe, a versão G foi a mais produzida'},
    {id:5, name:'P47 D - Thunderbolt', img:'img/P47D.png', price:[100.00, 150.00, 200.00], sizes:['1/72', '1/48', '1/32'], description:'Caça bombardeiro de fabricação americana utilizado pela FAB'},
    {id:6, name:'P51 D - Mustang', img:'img/P51D.png', price:[100.00, 150.00, 200.00], sizes:['1/72', '1/48', '1/32'], description:'O mais conhecido caça americano, importante escolta para os bombardeiros diurnos'},
    {id:7, name:'Spitfire Mk-IX', img:'img/SpitMk9.png', price:[100.00, 150.00, 200.00], sizes:['1/72', '1/48', '1/32'], description:'O mais famosa caça britânico, utilizado em toda a guerra'},
    {id:8, name:'A6M Zero', img:'img/Zero.png', price:[100.00, 150.00, 200.00], sizes:['1/72', '1/48', '1/32'], description:'O mais famoso caça da marinha japonesa, terror do pacífico nos anos iníciais da guerra'}
];

let cart = []
let modalQt;
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
    cart.push({
        id:modelsJson[key].id,
        qt:modalQt
    })
    closeModal()
})