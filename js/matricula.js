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
        quantidadePreco += parseFloat(checkbox.getAttribute("data_preco"));
    }
    else{
        quantidadeCursos--;
        quantidadeHoras -= parseInt(checkbox.value);
        quantidadePreco -= parseFloat(checkbox.getAttribute("data_preco"));
    }
    
    totalCurso.textContent = quantidadeCursos + " curso(s)";
    totalHoras.textContent = quantidadeHoras + " hora(s)";
    totalPreco.textContent = quantidadePreco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
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

function checkarTodos(todos){
    var checkboxs = document.getElementsByName("curso");

    for(var i=0; i < checkboxs.length; i++){
        if (checkboxs[i].checked != todos.checked){
            checkboxs[i].checked = todos.checked;
            adicionarCurso(checkboxs[i]);
        }
    }
}
