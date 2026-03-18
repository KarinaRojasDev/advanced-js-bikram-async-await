//DESARROLLA AQUI TUS SOLUCIONES

async function getImageAndName(pokemon) {
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  let data = await response.json();
  let name = data.name;
  let img = data.sprites.front_default;
  return { name, img };
}

/* Ejercicio 1.- Declara una función **getRandomPokemon** 
que retorne un pokemon aleatorio. */

async function getRandomPokemon() {
  try {
    let aleatorio = Math.floor(Math.random() * 100) + 1;
    let response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${aleatorio}`,
    );
    let data = await response.json();

    return data;
  } catch (error) {
    console.error("Hubo un problema con la solicitud:", error.message);
  }
}
getRandomPokemon().then((data) => console.log(data));

/* Ejercicio 2.- Declara una funcion **getImageAndName** 
que retorne el nombre y la URL de la imagen de un pokemon => (return {img, name}) */

async function getImageAndName() {
  try {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/25`);
    let data = await response.json();

    let name = data.species.name;
    let img = data.sprites.front_default;
    return { img, name };
  } catch (error) {
    console.error("Hubo un problema con la solicitud:", error.message);
  }
}
getImageAndName().then((data) => console.log(data));

/* Ejercicio 3.- Declara una funcion **printImageAndName** 
que retorne el string necesario para pintar la imagen y el nombre del pokemon 
en el DOM de la siguiente forma:*/

/* html
<section>
    <img src="url de imagen" alt="nombre del pokemon">
    <h1>Nombre del pokemon</h1>
</section> */

async function printImageAndName() {
  try {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/25`);
    let data = await response.json();

    let html = `<section>
            <img src="${data.sprites.front_default}" alt="${data.species.name}">
            <h1>${data.species.name}</h1>
        </section>`;

    document.body.innerHTML += html;

    return html;
  } catch (error) {
    console.error("Hubo un problema con la solicitud:", error.message);
  }
}

printImageAndName().then((html) => (document.body.innerHTML += html));

/* Ejercicio 4.- Declara una función **getRandomDogImage** 
que retorne la url de la imagen de un perro aleatorio */

async function getRandomDogImage() {
  try {
    let response = await fetch(`https://dog.ceo/api/breeds/image/random`);
    let data = await response.json();

    return data.message;
  } catch (error) {
    console.error("Hubo un problema con la solicitud:", error.message);
  }
}
getRandomDogImage().then((data) => console.log(data));

/* Ejercicio 5.- Declara una función **getRandomPokemonImage** 
que retorne la url de la imagen de un pokemon aleatorio. */

async function getRandomPokemonImage() {
  try {
    let aleatorio = Math.floor(Math.random() * 100) + 1;
    let response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${aleatorio}`,
    );
    let data = await response.json();
    return data.sprites.front_default;
  } catch (error) {
    console.error("Hubo un problema con la solicitud:", error.message);
  }
}
getRandomPokemonImage().then((data) => console.log(data));

/* Ejercicio 6.- Declara una función **printPugVsPikachu** 
que pinte la batalla entre "Pug" y "Pikachu" (no se testea) */

async function printPugVsPikachu() {
  try {
    const pikachu = `https://pokeapi.co/api/v2/pokemon/pikachu`;
    const pug = `https://dog.ceo/api/breed/pug/images/random`;

    const [res1, res2] = await Promise.all([fetch(pikachu), fetch(pug)]);
    const data1 = await res1.json();
    const data2 = await res2.json();

    document.body.innerHTML += `<section>
                    <img src="${data1.sprites.front_default}" alt="imagen de ${data1.forms[0].name}">
                    <p>${data1.base_experience}</p>
                    <p>${data1.forms[0].name}</p>
                </section>
                <section>
                    <img src="${data2.message}" alt="imagen de Pug">
                    <p>Pug</p>
                </section>`;
  } catch (error) {
    console.error("Hubo un problema con la solicitud:", error.message);
  }
}

printPugVsPikachu().then((data) => console.log(data));

/* Ejercicio 7.- Declara una función **getRandomCharacter** que retorne un personaje aleatorio. */

async function getRandomCharacter() {
  try {
    let random = Math.floor(Math.random() * 100) + 1;
    let response = await fetch(
      `https://rickandmortyapi.com/api/character/${random}`,
    );
    let data = await response.json();

    return data;
  } catch (error) {
    console.error("Hubo un problema con la solicitud:", error.message);
  }
}
getRandomCharacter().then((data) => console.log(data));

/* Ejercicio 8.- Declara una función **getRandomCharacterInfo** 
que retorne de un personaje su imagen, nombre, episodios en los que aparece 
y el nombre del primer episodio en el que aparece + fecha de estreno, 
tendrás que hacer otro fetch para llegar a los ultimos datos. 
Formato de retorno => (return {img, name, episodes, firstEpisode, dateEpisode}) */

async function getRandomCharacterInfo() {
  try {
    let random = Math.floor(Math.random() * 100) + 1;
    let response = await fetch(
      `https://rickandmortyapi.com/api/character/${random}`,
    );
    let data = await response.json();
    let img = data.image;
    let name = data.name;
    let episodes = data.episode;

    let responseEpisode = await fetch(episodes[0]);
    let data1 = await responseEpisode.json();

    
    let firstEpisode = data1.name;
    let dateEpisode = data1.air_date;
    let personaje = { img, name, episodes, firstEpisode, dateEpisode };
    return personaje;
  } catch (error) {
    console.error("Hubo un problema con la solicitud:", error.message);
  }
}

getRandomCharacterInfo().then((data) => console.log(data));

