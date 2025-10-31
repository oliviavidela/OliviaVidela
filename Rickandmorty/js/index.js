fetch("https://rickandmortyapi.com/api/character")
.then(function(response) {
  return response.json()
})
.then(function(data) {
  console.log(data);

let character = document.querySelector(".characterList")
let characters = ""

for (let i = 0; i < data.results.lenght;i++){
    characters =  `<article>
          <img src=${personaje.image} alt=${personaje.name}>
          <p>Name: ${personaje.name}</p>
          <p>Status: ${personaje.status}</p>
        </article> `
    }
    character.innerHTML = characters
    characters.style.display = "inline";
})
.catch(function(error) {
    console.log("Error:" +error);
})
