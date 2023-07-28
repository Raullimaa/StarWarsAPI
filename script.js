async function getCharacters() {
        await fetch("https://swapi.dev/api/people/?page-1")
    .then(response => response.json())
    .then((responseJson) => 
        responseJson.results.map((character) => addCharacter(character))
    )
    .catch((error) => console.log("Error: ", error));
}
getCharacters();
async function addCharacter(character) {
    const characterContent = 
    `<div class="card">
            <h2> ${character.name}</h2>
            <div class="image_container">
                <img src="https://starwars-visualguide.com/assets/img/characters/${character.url.replace(/\D/g, "")}.jpg" alt="${character.name}">
            </div>
            <div class="inf_container">
                <h3>Sobre:</h3>
                <h3>Name: ${character.name}</h3>
                <h3>Birth year: ${character.birth_year}</h3>
                <h3>Gender: ${character.gender}</h3>
            </div>
        </div>`;
    const cardcontainer = document.getElementsByClassName("card_container")[0];
    cardcontainer.innerHTML += characterContent;
}