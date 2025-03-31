function mostrarSenha(){
    var inputPass = document.getElementById('senha')
    var btnShowPass = document.getElementById('btn-senha')

    if(inputPass.type === 'password'){
        inputPass.setAttribute('type','text')
        btnShowPass.classList.replace('bxs-lock-alt','bxs-lock-open-alt')
    }else{
        inputPass.setAttribute('type','password')
        btnShowPass.classList.replace('bxs-lock-open-alt','bxs-lock-alt')
    }
}

function mostrarSenha2(){
    var inputPass = document.getElementById('confirma-senha')
    var btnShowPass = document.getElementById('btn-confirma-senha')

    if(inputPass.type === 'password'){
        inputPass.setAttribute('type','text')
        btnShowPass.classList.replace('bxs-lock-alt','bxs-lock-open-alt')
    }else{
        inputPass.setAttribute('type','password')
        btnShowPass.classList.replace('bxs-lock-open-alt','bxs-lock-alt')
    }
}

function cadastro(){
    var btnAlert = document.getElementById('btn-cadastro')
    alert("Cadastro feito com sucesso!")
}
function redefinicao(){
    var btnAlert = document.getElementById('btn-redefinicao')
    alert("Email enviado!")
}
