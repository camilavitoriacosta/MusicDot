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
        quantidadePreco -= parseInt(totalPreco.getAttribute("data-preco"));
    }
    else{
        quantidadeCursos--;
        quantidadeHoras -= parseInt(checkbox.value);
        quantidadePreco -= parseInt(totalPreco.getAttribute("data-preco"));
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
    var checkboxs = document.getElementsByName("curso");
    for(var i=0; i < checkboxs.length; i++){
        checkboxs[i].checked = true;
        quantidadeCursos++;
        quantidadeHoras += parseInt(checkboxs[i].value);
        quantidadePreco += parseInt(totalPreco.preco);
        totalCurso.textContent = quantidadeCursos + " curso(s)";
        totalHoras.textContent = quantidadeHoras + " hora(s)";
        totalPreco.textContent = "R$ "+ quantidadePreco;
    }
}