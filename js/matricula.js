var totalCurso = document.querySelector(".js-total-de-cursos");
var totalHoras = document.querySelector(".js-total-de-horas");
var totalPreco = document.querySelector(".js-total-de-preco");
var botaoConfirmar = document.querySelector(".js-botao-confirmar");
var checkboxs = document.getElementsByName("curso");

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
    habilitarSelecionarTodos(checkbox);
}

function habilitarSelecionarTodos(checkbox){
    var checkboxSelecionarTodos = document.getElementById("js-cursos");
    var tamanho = checkboxs.length;

    if (checkboxSelecionarTodos.checked && !checkbox.checked){
        checkboxSelecionarTodos.checked = false;
    }
    else if(!checkboxSelecionarTodos.checked && quantidadeCursos == tamanho){
        checkboxSelecionarTodos.checked = true;
    }
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
    for(var i=0; i < checkboxs.length; i++){
        if (checkboxs[i].checked != todos.checked){
            checkboxs[i].checked = todos.checked;
            adicionarCurso(checkboxs[i]);
        }
    }
}
