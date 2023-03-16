let inputNombre = document.getElementById('inputNombre');
let inputMensaje = document.getElementById('inputMensaje');

let nombreLabel = document.getElementById('nombreLabel');
let mensajeLabel = document.getElementById('mensajeLabel');



let searchTxt = document.getElementById('search__input');
let searchBtn = document.getElementById('search__btn');
let loginBtn = document.getElementById('login-button');
let searchContainer = document.getElementById('search');

inputNombre.onclick = function () {
    nombreLabel.classList.add('contact__label--active');
    inputNombre.classList.add('contact__input--active');
}
document.getElementById('nombre').addEventListener("blur", function () {
    nombreLabel.classList.remove('contact__label--active');
    inputNombre.classList.remove('contact__input--active');
});


inputMensaje.onclick = function () {
    mensajeLabel.classList.add('contact__label--active');
    inputMensaje.classList.add('contact__input--active');
}
document.getElementById('mensaje').addEventListener("blur", function () {
    mensajeLabel.classList.remove('contact__label--active');
    inputMensaje.classList.remove('contact__input--active');
});



searchContainer.addEventListener('mousemove', () => {
    
    loginBtn.classList.add('header__login-button--hidden');
});



searchTxt.addEventListener('mouseout', () => {
    setTimeout(function(){
        loginBtn.classList.remove('header__login-button--hidden');
    
    },500);
});


const addProductBtn = document.querySelector('#addProductBtn');
addProductBtn.addEventListener("click", (event) => event.preventDefault());


addProductBtn.addEventListener("click", () => {
    window.location.href = "index.html";    
});