// NAV BAR COMEÇA
// Este comando sinaliza para o navegador que é preciso esperar até que toda a página esteja carregada antes de fazer qualquer coisa.
document.addEventListener("DOMContentLoaded", function () {

  // Evento de clique no <a> para aparecer, quando esse link é clicado, ele executa a funçao event.preventDefault(), e a estilizacao vai acontecer
  a.addEventListener("click", function (event) {
    event.preventDefault();
    arrow.style = "transform: rotate(-135deg); margin-bottom: 1px"; //gira e ajusta a margem
    mais.style = "top: 50px;pointer-events: all";
    span1.style = "pointer-events: all";
    span2.style = "pointer-events: all";//o texto vai responder a todos os eventos do ponteiro
    span3.style = "pointer-events: all";
    span4.style = "pointer-events: all";
  });

  // Evento de clique em qualquer lugar da tela para desaparecer
  document.addEventListener("mouseout", function (event) {
    if (event.target !== a && event.target !== mais && event.target !== lis && event.target !== span1 && event.target !== span2 && event.target !== span3) {
      arrow.style = "transform: rotate(45deg); margin-bottom: 4px";
      mais.style = "top: -100px; pointer-events: none";
      span1.style = "pointer-events: none";
      span2.style = "pointer-events: none";
      span3.style = "pointer-events: none";
      span4.style = "pointer-events: all";
    }
  });
});
let currentIndex = 0;

//Função para mostrar a próxima imagem na galeria
function nextImage() {
  const images = document.querySelectorAll('.carousel-images img'); //obtem todas as imagens dentro da classe .carousel-images
  currentIndex = (currentIndex + 1) % images.length; //garante que o índice permaneça dentro dos limites do número de imagens na galeria
  updateCarousel(); //atualiza a exibição da galeria.
}

function prevImage() {
  const images = document.querySelectorAll('.carousel-images img');
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateCarousel(); // faz a mesma coisa que a funcao a cima, mas mostra a imagem anterior, e nao a proxima
}

function updateCarousel() {
  const images = document.querySelector('.carousel-images');
  const imageWidth = images.firstElementChild.offsetWidth;
  const offset = -currentIndex * imageWidth;
  images.style.transform = `translateX(${offset}px)`;
  //é responsável por atualizar a exibição da galeria
  //calcula o deslocamento necessário para mostrar a imagem atual com base no currentIndex,
  // multiplica esse deslocamento pela largura de cada imagem e, em seguida, 
  //aplica essa transformação à galeria para mover as imagens horizontalmente.
  // Isso cria o efeito de "carrossel", onde as imagens parecem deslizar para a esquerda ou para a direita.
}

// GALERIA TERMINA
