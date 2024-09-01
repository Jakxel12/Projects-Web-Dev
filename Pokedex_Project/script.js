/*fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
.then(response => {
  if(!response .ok) {
    throw new Error('Could not fetch resource')
  }
  return response.json();
})
.then(data => console.log(data))
.catch(error => console.error());*/


async function fetchData() {
  try {
    const pokemonName = document.getElementById("pokemonName").value.toLowerCase();

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

    if (!response.ok) {
      throw new Error('Could not fetch resource');
    }

    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;
    const imgElement = document.getElementById("pokemonSprite");
    const type1 = data.types[0].type.name;
    const type2 = data.types.length > 1 ? data.types[1].type.name : null;

    typeColor(type1);

    imgElement.src = pokemonSprite;
    imgElement.classList.remove('hidden');
      imgElement.classList.add('visible');

    
  } catch (error) {
    console.log(error);
  }
}

document.getElementById("pokemonName").addEventListener('input', () => {
  const imgElement = document.getElementById("pokemonSprite");
  const textInput = document.getElementById("pokemonName");

  try {
    if (textInput.value === '') {
      imgElement.classList.add('hidden');
      setTimeout(() => {
        imgElement.classList.remove('visible');
      }, 500);
    }
  } catch (error) {
    console.log(error);
  }
});

function typeColor(type) {
  const typeColor = {
    normal: 'grey',
    electric: 'yellow',
    fire: 'red',
    water: 'blue'
  };
  const color = typeColor[type] || 'white';

  document.getElementById("pokemonSprite").style.backgroundColor = color;
}