// 8

async function getPokemons() {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon');
      const parsed = await response.json();
      return parsed.results;
    } catch(error) {
      console.log(error);
    }
  }

async function getPokemonsDetails() {
    const result = await getPokemons().then((pokemons) => {
        return Promise.all(pokemons.map((p) => fetch(p.url).then(r => r.json())))
    })
    console.log(result);
}

getPokemonsDetails();