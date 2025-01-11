// Obtenemos el contenedor donde se añadirán las tarjetas

const container = document.getElementById("cards-container");

const renderData = (data) => {

    // Mapeamos los datos de cada película en tempData para crear las tarjetas
    data.forEach(movie => {
    // Creamos el div de la tarjeta
    const card = document.createElement("div");
    card.className = "cards";
  
    // Creamos el título de la tarjeta
    const title = document.createElement("h4");
    title.className = "titleCards";
    title.textContent = movie.title;

    //creamos el año
    const year = document.createElement("h5");
    year.className = "yearCards";
    year.textContent = movie.year;

    // creamos director
    const director = document.createElement("h5");
    director.className = "directorCards";
    director.textContent = movie.director;

    //creamos duration
    const duration = document.createElement("h5");
    duration.className = "durationCards";
    duration.textContent = movie.duration;

    //creamos genre
    const genre = document.createElement("h5");
    genre.className = "genreCards";
    genre.textContent = movie.genre;

    //creamos el rate
    const rate = document.createElement("h5");
    rate.className = "rateCards";
    rate.textContent = movie.rate;

    // Creamos la imagen de la tarjeta
    const img = document.createElement("img");
    img.className = "cardPeliculaImagen";
    img.src = movie.poster;
    img.alt = `${movie.title} poster`;
  
    // Añadimos el título y la imagen al div de la tarjeta
    card.appendChild(title);
    card.appendChild(img);
    card.appendChild(year);
    card.appendChild(director);
    card.appendChild(duration);
    card.appendChild(genre);
    card.appendChild(rate);
  
    // Añadimos la tarjeta completa al contenedor
    container.appendChild(card);
  });
}

  module.exports= renderData;
  