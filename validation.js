var senha = document.getElementById('senha');
var confirmaSenha = document.getElementById('confirmaSenha');
var error = document.querySelector('.error');

confirmaSenha.addEventListener("input", function (event) {
if(confirmaSenha.value !== senha.value){

    error.className = "error active"
}else{
    error.className = "error"
}

});