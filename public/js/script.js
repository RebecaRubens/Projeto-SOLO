// NAV BAR COMEÇA

document.addEventListener("DOMContentLoaded", function () {

    // Evento de clique no <a> para aparecer
    a.addEventListener("click", function (event) {
      event.preventDefault();
      arrow.style = "transform: rotate(-135deg); margin-bottom: 1px";
      Tools.style = "top: 50px;pointer-events: all";
      span1.style = "pointer-events: all";
      span2.style = "pointer-events: all";
      span3.style = "pointer-events: all";
      span4.style = "pointer-events: all";
    });
  
    // Evento de clique em qualquer lugar da tela para desaparecer
    document.addEventListener("mouseout", function (event) {
      if (event.target !== a && event.target !== Tools && event.target !== lis && event.target !== span1 && event.target !== span2 && event.target !== span3) {
        arrow.style = "transform: rotate(45deg); margin-bottom: 4px";
        Tools.style = "top: -100px; pointer-events: none";
        span1.style = "pointer-events: none";
       span2.style = "pointer-events: none";
        span3.style = "pointer-events: none";
       span4.style = "pointer-events: all";
      }
    });
  });

  //NAV BAR TERMINA

//   GALERIA COMEÇA

function flipCard(card) {
    card.querySelector('.card-inner').style.transform = "rotateY(180deg)";
}

function unflipCard(card) {
    card.querySelector('.card-inner').style.transform = "rotateY(0deg)";
}


let currentIndex = 0;

function nextImage() {
    const images = document.querySelectorAll('.carousel-images img');
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
}

function prevImage() {
    const images = document.querySelectorAll('.carousel-images img');
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
}

function updateCarousel() {
    const images = document.querySelector('.carousel-images');
    const imageWidth = images.firstElementChild.offsetWidth;
    const offset = -currentIndex * imageWidth;
    images.style.transform = `translateX(${offset}px)`;
}

// GALERIA TERMINA
