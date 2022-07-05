var botaoAdicionar = document.querySelector('#buscar-pacientes')

botaoAdicionar.addEventListener("click", function(){
    console.log("Buscando Pacientes");
    
    var api = new XMLHttpRequest(); // iniciando a requisição XML

    api.open("GET", "https://api-pacientes.herokuapp.com/pacientes") // passando o methodo e URL a ser acessada
    
    api.addEventListener("load", function(){
        var erroAjax = document.querySelector("#erro-ajax");
        if (api.status == 200) {
            erroAjax.classList.add("invisivel");
            // Buscando a resposta da API como STRING(texto)
            var resposta = api.responseText;
            // exibindo resposta da API em um ARRAY de (Objetos)
            var pacientes = JSON.parse(resposta);
    
            pacientes.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        }else{
            console.log(api.status);
            console.log(api.responseText);
            var erroAjax = document.querySelector("#erro-ajax");
            erroAjax.classList.remove("invisivel");
        }
    });
    api.send();
});