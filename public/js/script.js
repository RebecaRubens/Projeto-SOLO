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
  const images = document.querySelector('.carousel-images'); //seleciona as imagens q estao dentro
  const imageWidth = images.firstElementChild.offsetWidth; //seleciona a primeira imagem do carrossel
  //offsetWidth é a largura total da imagem, incluindo bordas e padding, esta largura é armazenada na constante imageWidth.
  const offset = -currentIndex * imageWidth;//currentIndex é a posição atual no carrossel
  //Multiplicamos currentIndex pela imageWidth para calcular a distância total que precisamos mover o container de imagens.
  //O sinal de menos é usado porque queremos mover o container para a esquerda (direção negativa no eixo X).
  images.style.transform = `translateX(${offset}px)`;
  //images.style.transform é uma propriedade que permite aplicar transformações CSS ao elemento.
  // offset é o valor calculado anteriormente que indica quantos pixels mover o elemento.

  //exemplo: 
//currentIndex = 2
// imageWidth = 200 pixels
// Cálculo:
// offset = -2 * 200
// offset = -400
// Isso significa que precisamos mover o container de imagens 400 pixels para a esquerda para mostrar a terceira imagem.
}
// GALERIA TERMINA
