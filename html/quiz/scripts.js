var perguntas = [
    {
        pergunta: "Qual é a capital do Brasil?",
        opcoes: ["São Paulo", "Brasília", "Rio de Janeiro", "Salvador"],
        resposta: "Brasília"
    },
    {
        pergunta: "Quem escreveu 'Dom Quixote'?",
        opcoes: ["Miguel de Cervantes", "William Shakespeare", "Fyodor Dostoevsky", "Leo Tolstoy"],
        resposta: "Miguel de Cervantes"
    },
    // Adicione as demais perguntas aqui
];

var indicePerguntaAtual = 0;
var respostas = [];

function exibirPergunta() {
    var perguntaDiv = document.getElementById("pergunta");
    var opcoesDiv = document.getElementById("opcoes");
    var perguntaAtual = perguntas[indicePerguntaAtual];

    perguntaDiv.textContent = perguntaAtual.pergunta;
    opcoesDiv.innerHTML = "";

    perguntaAtual.opcoes.forEach(function(opcao) {
        var button = document.createElement("button");
        button.textContent = opcao;
        button.classList.add("opcao");
        button.onclick = function() {
            selecionarResposta(opcao);
        };
        opcoesDiv.appendChild(button);
    });
}

function selecionarResposta(resposta) {
    respostas[indicePerguntaAtual] = resposta;
}

function proximaPergunta() {
    if (respostas[indicePerguntaAtual] === undefined) {
        alert("Por favor, selecione uma resposta antes de continuar.");
        return;
    }

    indicePerguntaAtual++;

    if (indicePerguntaAtual === perguntas.length) {
        mostrarResultado();
    } else {
        exibirPergunta();
    }
}

function mostrarResultado() {
    var resultadoDiv = document.getElementById("resultado");
    var corretas = 0;

    perguntas.forEach(function(pergunta, index) {
        if (respostas[index] === pergunta.resposta) {
            corretas++;
        }
    });

    resultadoDiv.textContent = "Você acertou " + corretas + " de " + perguntas.length + " perguntas.";
}

window.onload = exibirPergunta;
