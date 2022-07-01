var mensagemErro = document.querySelector("p#mensagemErro")

var input1 = document.querySelector("input#nome");
var input2 = document.querySelector("input#email");
var input3 = document.querySelector("input#senha");

var nome = 'Temotio Luis';
var email = 'timotio.luis@snowmanlabs.com';
var senha = 'camotio32';

function Registando() {

    if
        (
        input1.value == nome,
        input2.value == email &&
        input3.value == senha
    ) {
        document.write(`oi ${input1.value} o seu email é ${input2.value} e a sua senha é segreda!!!!`)
    } else {
        alert('Error[404]');
    }

}

// const comments = [
//     {author: 'Temótio', description: 'Gostei muito de fazer esse prato'},
//     {author: 'Quizito', description: 'Não gostei muito de fazer esse prato'}
// ]
function showPage() {
    window.location.href = "Adicionar_Receita.html";
}
function backButton() {
    window.location.href = "PincipalPage.html";
}
function Entrando() {
    if
        (
        input2.value == email
        &&
        input3.value == senha
    ) {
        window.location.href = "PincipalPage.html";
    } else {
        mensagemErro.innerHTML = 'Sua senha está incorreta. Por favor, tente novamente.'
        setTimeout(function(){
            mensagemErro.innerHTML = ''
        },3000);
    }
}

// MENU ADICIONA RECDEITA
function menuItens() {
    var showItens = document.querySelector('div#itens')

    if(showItens.classList.contains('visible')) {
        showItens.classList.remove('visible')
        return
    }
    showItens.classList.add('visible')
    
}





ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700
  }).reveal(`
    .logos,
    .pesquisa,
    .selecao,
    .carts,
    .card,
    .container,
    .sub,
    .marcas
    
`)
ScrollReveal({
    origin: 'left',
    distance: '30px',
    duration: 700
}).reveal (`
    .svg1,
    img,
    h1,
    p,
    publicador
`)