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
        setTimeout(function () {
            mensagemErro.innerHTML = ''
        }, 3000);
    }
}
const showPageInsert = () => {
    var windowPage = prompt("Qual pagina você quer ir")
    if (windowPage.toLowerCase() == 'login') {
        window.location.href = "login.html"

    } else if(windowPage.toLowerCase() == 'adicionar ingredientes') {
        window.location.href = "Adicionar uma Receita.html"

    } else if(windowPage.toLowerCase() == 'perfil usuario') {
        window.location.href = "perfil_Usuario.html"
        
    }else if(windowPage.toLowerCase() == 'minhas receitas') {
        window.location.href = "suaReceitas.html"
    } else {
        window.location.href = "PincipalPage.html";
    }
}
var h1 = document.querySelector('h1#h1')

function searchFood(event) {
    //Ler o valor do input de busca.
    const resultadoNaoEncontrado = document.querySelector('h1.resultado')
    const valorPesquisado = event.target.value.toLowerCase()
    //Encontrar a lista de cards no HTML.
    const carts = document.querySelectorAll('.cart')

    //Para cada  um dos cards ler o titulo da comida.
    carts.forEach(cart => {
        const titulo = cart.querySelector('h3').innerHTML.toLowerCase()
        //Para os titulos que contem  o valor da busca esconder o card.

        if (!titulo.includes(valorPesquisado)) {
            cart.style.display = 'none'
        } else {
            cart.style.display = 'block'
        }
    })
}
// MENU ADICIONA RECDEITA
function menuItens() {
    var showItens = document.querySelector('div#itens')

    if (showItens.classList.contains('visible')) {
        showItens.classList.remove('visible')
        return
    }
    showItens.classList.add('visible')

}
function perfilUsuario() {
    window.location.href = "perfil_Usuario.html";
}
function backLogin() {
    window.location.href = 'index.html'
}
// JavaScript code
ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700
}).reveal(`
  .before,
    .logos,
    .pesquisa,
    .selecao,
    .carts,
    .card,
    .container,
    .sub,
    .marcas,
    .informacoes,
    .infoSeguindo,
    .pages
`)
ScrollReveal({
    origin: 'left',
    distance: '30px',
    duration: 700
}).reveal(`
   .infoSeguindoOne,
   .clutem
`)
function handleImage () {
    navigator.mediaDevices.getUserMedia({video: true})
    .then(function(m){
        const video = document.querySelector('#video');
        video.srcObject = m;
        video.play();
    })
}
function capitura() {
    const canvas = document.querySelector('#canvas');
    const video = document.querySelector('#video');
    canvas.height = video.videoHeight;
    canvas.width = video.videoWidth;
    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0);
}