const axios = require("axios")

const renderCards = require(`./renderData`)

// const URL = "https://students-api.up.railway.app/movies";
const URL = "http://localhost:3000/movies";

//  $.get(URL, data => {
//    renderCards(data)
//  })

 // IIFE
//  (async () => {
//     const getFetch = await fetch(URL)
//     const getFetchJson = await getFetch.json()

//     renderCards(getFetchJson);
//     console.log(`getFetch`, getFetchJson);
//  })()

// AXIOS
// promesas

// axios(URL)
//   .then(response => renderCards(response.data))
//   .catch(error => alert(`error en la peticion`));

// Async - await

(async () => {

  const getData = await axios(URL)

  renderCards(getData.data);
  console.log(`getFetch`, getData);
})()
