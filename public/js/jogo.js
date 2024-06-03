const cellElements = document.querySelectorAll("[data-cell]"); //seleciona os elementos da pagina q tem o atributo data-cell
const board = document.querySelector("[data-board]"); // seleciona o tabuleiro do jogo
const winningMessageTextElement = document.querySelector(
  "[data-winning-message-text]"
); //seleciona o elemento com o atributo data-winning-message-text, que é onde será exibida a mensagem de vitória.
const winningMessage = document.querySelector("[data-winning-message]"); // mensagem de vitória em si
const restartButton = document.querySelector("[data-restart-button]"); // seleciona o botao usado para reiniciar o jogo
const dashboardButton = document.querySelector("[data-dashboard-button]"); //seleciona o botao usado para voltar para tela da dash

let isCircleTurn; //váriavel que armazena quem é a vez de jogar

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]; //lista de combinações de possibilidades que podem vencer no jogo

const startGame = () => { //funcao que inicia o jogo
  isCircleTurn = false; //define que os humanos começam

  for (const cell of cellElements) {
    cell.classList.remove("circle");
    cell.classList.remove("x");
    cell.removeEventListener("click", handleClick);
    cell.addEventListener("click", handleClick, { once: true });
  }
  //para cada célula do tabuleiro, remove as classes circle e x (limpa a célula) e adiciona um evento de clique que chama handleClick quando a célula é clicada, mas apenas uma vez ({ once: true }).

  setBoardHoverClass(); //Chama a função para definir a classe de hover (passar o mouse sobre).
  winningMessage.classList.remove("show-winning-message");
}; 

const endGame = (isDraw) => { //funcao que finaliza o jogo
  if (isDraw) { //se for empate, exiba "empate"
    winningMessageTextElement.innerText = "Empate!";
  } else {
    winningMessageTextElement.innerText = isCircleTurn
      ? "Os robôs Venceram!"
      : "Os Humanos Venceram!";
      const vencedor = isCircleTurn ? "Círculo" : "X";
    registrarResultado(vencedor); // se não for empate, mostra quem venceu e registra o resultado chamando registrarResultado.
  }

  winningMessage.classList.add("show-winning-message");
}; //Adiciona a classe que mostra a mensagem de vitória.

const registrarResultado = (vencedor) => {
  fetch("/resultados/registrar-resultado", { //Faz uma solicitação POST para enviar os dados do vencedor.
    method: "POST", // envio de dados
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      vencedor: vencedor,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro ao registrar o resultado");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Resultado registrado com sucesso:", data);
    })
    .catch((error) => {
      console.error("Erro:", error);
    });
};
const checkForWin = (currentPlayer) => { //verifica se o jogador atual venceu
  return winningCombinations.some((combination) => { //retorna true se alguma combinação vencedora for atendida.
    return combination.every((index) => { //verifica se todas as células da combinação possuem a classe do jogador atual.
      return cellElements[index].classList.contains(currentPlayer); // verifica se todas as células dessa combinação contêm a classe do jogador atual (currentPlayer).
    });
  });
};

const checkForDraw = () => { //verifica se foi empate
  return [...cellElements].every((cell) => {
    return cell.classList.contains("x") || cell.classList.contains("circle");
  }); //Retorna true se todas as células estão preenchidas com x ou circle.
};

const placeMark = (cell, classToAdd) => {
  cell.classList.add(classToAdd); //Adiciona a classe do jogador à célula.
}; // Função que adiciona a marca do jogador (círculo ou X) na célula.

const setBoardHoverClass = () => {
  board.classList.remove("circle");
  board.classList.remove("x");

  if (isCircleTurn) {
    board.classList.add("circle");
  } else {
    board.classList.add("x");
  } //se for a vez do circulo, adiciona um circulo na tela, se nao for, adiciona um x
};

const swapTurns = () => { //Função que troca a vez dos jogadores.
  isCircleTurn = !isCircleTurn;  

  setBoardHoverClass();
}; //Atualiza a classe de hover do tabuleiro.

const handleClick = (e) => { // Função que lida com o clique em uma célula.
  // Colocar a marca (X ou Círculo)
  const cell = e.target; //Obtém a célula clicada.
  const classToAdd = isCircleTurn ? "circle" : "x"; //Define a classe a ser adicionada com base na vez do jogador.

  placeMark(cell, classToAdd); //Adiciona a marca na célula.


  // Verificar por vitória
  const isWin = checkForWin(classToAdd);  //Verifica quem venceu.


  // Verificar por empate
  const isDraw = checkForDraw(); //Verifica se o jogo terminou em empate.

  if (isWin) {
    endGame(false);
  } else if (isDraw) {
    endGame(true);
  } else {
    // Mudar símbolo
    swapTurns();
  }
}; //Finaliza o jogo se houve vitória ou empate, ou troca a vez dos jogadores.


startGame();

restartButton.addEventListener("click", startGame);
dashboardButton.addEventListener("click", () => {
  window.location.href = "./Dashboard/dashboard.html";
});