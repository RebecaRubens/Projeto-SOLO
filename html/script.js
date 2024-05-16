// NAV BAR COMEÇA

document.addEventListener("DOMContentLoaded", function () {

    // Evento de clique no <a> para aparecer
    a.addEventListener("click", function (event) {
      event.preventDefault();
      arrow.style = "transform: rotate(-135deg); margin-bottom: 1px";
      Tools.style = "top: 50px;pointer-events: all";
      Tools_span1.style = "pointer-events: all";
      Tools_span2.style = "pointer-events: all";
      Tools_span3.style = "pointer-events: all";
    });
  
    // Evento de clique em qualquer lugar da tela para desaparecer
    document.addEventListener("mouseout", function (event) {
      if (event.target !== a && event.target !== Tools && event.target !== lis && event.target !== Tools_span1 && event.target !== Tools_span2 && event.target !== Tools_span3) {
        arrow.style = "transform: rotate(45deg); margin-bottom: 4px";
        Tools.style = "top: -100px; pointer-events: none";
        Tools_span1.style = "pointer-events: none";
        Tools_span2.style = "pointer-events: none";
        Tools_span3.style = "pointer-events: none";
      }
    });
  });

  //NAV BAR TERMINA

  //API MAPS COMEÇA

  var map; // Armazena o objeto de mapa do Google
  var service; // Armazena o serviço de busca de lugares do Google
  var markers = []; // Armazena os marcadores na lista
  
  function initMap() { // Chamada quando abre a página
    map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: -23.5505, lng: -46.6333 }, // Coordenadas iniciais (São Paulo)
      zoom: 1.5, // Zoom inicial
      mapTypeControl: false // Desativa o controle de tipo de mapa (Mapa / Satélite) 
  
    });
  
    var input = document.getElementById('pac-input'); // Variável que pega o valor da input
    var search = document.getElementById('container')
    var searchBox = new google.maps.places.SearchBox(input);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(search);
    map.addListener('bounds_changed', function () {
      searchBox.setBounds(map.getBounds());
    });
  
    var markers = [];
  
    searchBox.addListener('places_changed', function () {
      var places = searchBox.getPlaces();
  
      if (places.length == 0) {
        return;
      }
  
      markers.forEach(function (marker) {
        marker.setMap(null);
      });
      markers = [];
  
      var bounds = new google.maps.LatLngBounds();
      places.forEach(function (place) {
        if (!place.geometry) {
          console.log("Localização retornada sem coordenadas: ", place);
          return;
        }
  
        markers.push(new google.maps.Marker({
          map: map,
          title: place.name,
          position: place.geometry.location
        }));
  
  
  
        if (place.geometry.viewport) {
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }
      });
      map.fitBounds(bounds);
    });
  }
  
  document.addEventListener("DOMContentLoaded", function () {
  var pac = document.getElementById('pac-input');
  
    pac.addEventListener("keypress", function (event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        searchNearby();
      }
    });
  });
  
  // Função para buscar lojas de música próximas à localização do usuário
  function searchNearby() {
  
    var request = {
      location: map.getCenter(),
      radius: '20000', // Raio de busca de 20km
      keyword: 'teatro'
    };
  
    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, function (results, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        clearMarkers();
        showPlacesList(results);
        for (var i = 0; i < results.length; i++) {
          createMarker(results[i]);
        }
      }
    });
  }
  
  function createMarker(place) {
    var marker = new google.maps.Marker({
      map: map,
      position: place.geometry.location
    });
  
    markers.push(marker);
  }
  
  function clearMarkers() {
    for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(null);
    }
    markers = [];
  }
  
  function showPlacesList(places) {
    var placesList = document.getElementById('placesList');
    placesList.innerHTML = '';
    for (var i = 0; i < places.length; i++) {
      var place = places[i];
      var li = document.createElement('div');
  
      var name = document.createElement('strong');
      name.textContent = place.name;
      li.appendChild(name);
  
      if (place.vicinity) {
        var address = document.createElement('p');
        address.textContent = 'Endereço: ' + place.vicinity;
        li.appendChild(address);
      }
  
      if (place.formatted_phone_number) {
        var phone = document.createElement('p');
        phone.textContent = 'Telefone: ' + place.formatted_phone_number;
        li.appendChild(phone);
      }
  
      if (place.website) {
        var website = document.createElement('p');
        website.innerHTML = 'Site: <a href="' + place.website + '" target="_blank">' + place.website + '</a>';
        li.appendChild(website);
      }
  
      if (place.opening_hours && place.opening_hours.weekday_text) {
        var openingHours = document.createElement('p');
        openingHours.textContent = 'Horário de Funcionamento:';
        place.opening_hours.weekday_text.forEach(function (weekday) {
          openingHours.innerHTML += '<br>' + weekday;
        });
        li.appendChild(openingHours);
      }
  
      placesList.appendChild(li);
    }
  }
  var cont = 1;
  
  // Função para criar marcadores para os lugares encontrados
  function createMarker(place) {
    var marker = new google.maps.Marker({
      map: map,
      position: place.geometry.location
    });
  
    var infoWindow = new google.maps.InfoWindow({
      content: place.name // Define o conteúdo do info window como o nome do local
    });
  
    // Adiciona um evento de clique ao marcador
    marker.addListener('click', function () {
      infoWindow.open(map, marker); // Abre o info window no mapa, acima do marcador
    });
  
    markers.push(marker); // Adiciona o marcador à lista de marcadores
  }
  
  
  function toggleList() {
    var sidebar = document.getElementById('sidebar');
    var search = document.getElementById('search-bar');
    var arrow = document.getElementById('arrow_map');
    var container = document.getElementById('container');
    var resto = cont % 2;
  
    if (resto == 0) {
      sidebar.style.top = '-352px';
      search.style = 'border-radius: 25px; margin-left: 10px; margin-top: 10px';
      arrow.style = 'transform: rotate(45deg);';
      container.style = 'height: 55px;';
      cont++;
    } else {
      sidebar.style.top = '49px';
      search.style = 'border-radius: 0; margin-top: 0px; margin-left: 0px;';
      arrow.style = 'transform: rotate(225deg);';
      container.style = 'height: 400px;';
      cont++;
    }
  }

  // API MAPS TERMINA

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


// forum comeca

function enviarAvaliacao() {
  var nota = document.getElementById("nota").value;
  var comentario = document.getElementById("comentario").value;

  if (nota < 1 || nota > 10) {
      alert("A nota deve estar entre 1 e 10.");
      return;
  }

  // Aqui você faria uma requisição para o seu backend para salvar a avaliação no banco de dados
  // Por enquanto, vamos apenas exibir a avaliação na página
  exibirAvaliacao(nota, comentario);
}

function exibirAvaliacao(nota, comentario) {
  var avaliacoesDiv = document.getElementById("avaliacoes");

  var div = document.createElement("div");
  div.classList.add("avaliacao");
  div.innerHTML = "<strong>Nota:</strong> " + nota + "<br><strong>Comentário:</strong> " + comentario;

  avaliacoesDiv.appendChild(div);
}

// Aqui você poderia fazer uma requisição AJAX ou Fetch API para obter as avaliações do servidor
// e exibi-las na página ao carregar


