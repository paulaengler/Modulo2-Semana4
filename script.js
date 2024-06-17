function compartilharInstagram() {
  // Lógica para compartilhar no Instagram
  console.log("Compartilhar no Instagram");
  window.open("https://www.instagram.com", "_blank");
}

function compartilharFacebook() {
  // Lógica para compartilhar no Facebook
  console.log("Compartilhar no Facebook");
  window.open("https://www.facebook.com", "_blank");
}

function compartilharTwitter() {
  // Lógica para compartilhar no Twitter
  console.log("Compartilhar no Twitter");
  window.open("https://twitter.com", "_blank");
}

function compartilhar() {
  window.alert("Página em construção");
}

function assistirEpisodio(id) {
  console.log('Clicou para assistir o episodio ', id);
}


// function assistirEpisodio2() {
//   console.log("Episódio 2 selecionado");
// }

// function assistirEpisodio3() {
//   console.log("Episódio 3 selecionado");
// }

/*
const listaEps = document.getElementById('lista-episodios')
listaEps.innerHTML += `<div>
                            <img src="">
                            <span>${nomeEpisodio}</span>
                        </div>`
*/

const episodios = [
  {
    id: 1,
    episodio: "T01:01",
    tempo: "24min",
    imagem: 'imagemepi1.jpeg'
  },
  {
    id: 2,
    episodio: 'T01:02',
    tempo: '26min',
    imagem: 'imagemepi2.jpeg'
  },
  {
    id: 3,
    episodio: "T01:03",
    tempo: "29min",
    imagem: 'imagemepi3.jpeg'
  },
];

const listaEpisodios = document.getElementById("lista-episodios")

episodios.forEach((episodio) => {
  const cardEpisodio = document.createElement("div");
  cardEpisodio.className = "card-episodio";  
  //console.log(cardEpisodio);

  cardEpisodio.style.backgroundImage = `url(${episodio.imagem})`;
  cardEpisodio.style.backgroundSize = "cover";
  cardEpisodio.style.backgroundPosition = "center";

  cardEpisodio.innerHTML = `                        
                        <span>${episodio.episodio}</span>
                        <span>Duração:${episodio.tempo}</span>
                        
                        <button id=botao onclick="assistirEpisodio(${episodio.id})">Assistir</button>
                        `
  // console.log(cardEpisodio);
  listaEpisodios.appendChild(cardEpisodio);
});



// <img src="${episodio.imagem}">
