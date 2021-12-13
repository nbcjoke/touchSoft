// 6

async function getPokemons() {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon');
      const parsed = await response.json();
      return parsed.results;
    } catch(error) {
      console.log(error);
    }
  }
  
  getPokemons().then((res) => {
      console.log(res);
  });