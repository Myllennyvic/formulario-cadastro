function validaFormulario() {
    const nome = document.getElementById("nome").value;
    const email = document.querySelector("#email").value;
    const senha = document.getElementById("senha").value;

    if(nome == '' || email == '' || senha == ''){
        alert('Por favor, preencha os campos.')
    } 
    //verificar/validação email 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if(!emailRegex.test(email)){
        alert('Por favor, insira um e-mail válido!')
    }

    if(senha > 8){
        alert('Limite de caracteres excedido na sua senha!')
    }
    alert('Cadastro realizado com sucesso.')
}