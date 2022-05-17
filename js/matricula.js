var totalCurso = document.querySelector(".js-total-de-cursos");
var totalHoras = document.querySelector(".js-total-de-horas");
var totalPreco = document.querySelector(".js-total-de-preco");
var botaoConfirmar = document.querySelector(".js-botao-confirmar");

var quantidadeCursos = 0;
var quantidadeHoras = 0;
var quantidadePreco = 0;

function adicionarCurso(checkbox){
    if (checkbox.checked){
        quantidadeCursos++;
        quantidadeHoras += parseInt(checkbox.value);
        quantidadePreco += parseInt(checkbox.getAttribute("data_preco"));
    }
    else{
        quantidadeCursos--;
        quantidadeHoras -= parseInt(checkbox.value);
        quantidadePreco -= parseInt(checkbox.getAttribute("data_preco"));
    }
    
    totalCurso.textContent = quantidadeCursos + " curso(s)";
    totalHoras.textContent = quantidadeHoras + " hora(s)";
    totalPreco.textContent = "R$ "+ quantidadePreco;
    ativaBotao();
}

function ativaBotao(){
    if(quantidadeCursos > 0){
        botaoConfirmar.classList.remove("disabled");
    }
    else{
        botaoConfirmar.classList.add("disabled");
    }
}

function checkarTodos(){
    var todos = document.querySelector(".todos");
    var selecionar = todos.getAttribute("todos_selecionados");
    
    if (selecionar == "false"){
        todos.setAttribute("todos_selecionados", "true");
        selecionar = true;
    }
    else{
        todos.setAttribute("todos_selecionados", "false");
        selecionar= false;
    }

    var checkboxs = document.getElementsByName("curso");
    for(var i=0; i < checkboxs.length; i++){
        checkboxs[i].checked = selecionar;
        adicionarCurso(checkboxs[i]);
    }

        
    totalCurso.textContent = quantidadeCursos + " curso(s)";
    totalHoras.textContent = quantidadeHoras + " hora(s)";
    totalPreco.textContent = "R$ "+ quantidadePreco;
}