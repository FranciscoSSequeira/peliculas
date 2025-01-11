const URL = "http://localhost:3000/movies";

const title = document.getElementById('title');
const year = document.getElementById('year');
const director = document.getElementById('director');
const duration = document.getElementById('duration');
const genre = document.getElementById('genre');
const rate = document.getElementById('rate');
const poster = document.getElementById('poster');

const buttonReset = document.getElementById('reset');
const buttonSend = document.getElementById('Buttonsend');

const reset = () => {
    title.value = "";
    year.value = "";
    director.value = "";
    duration.value = "";
    genre.value = "";
    rate.value = "";
    poster.value = "";
  };

const sumitData = () => {
  
  const data = {
    title : title.value,
    year : year.value,
    director : director.value,
    duration : duration.value,
    genre : genre.value?.split(","),
    rate : rate.value,
    poster : poster.value,
  }

  console.log('llega data', data);

  fetch(URL, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      'Content-Type' : 'application/json',
    },
  });
  
};

buttonReset?.addEventListener("click", () => reset());
buttonSend?.addEventListener("click", () =>  sumitData());

