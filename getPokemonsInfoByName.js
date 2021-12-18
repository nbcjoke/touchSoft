// 7

async function getPokemonsInfoByName(name) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const parsed = await response.json();
        return parsed;
      } catch(error) {
        console.log(`Покемон по имени ${name} не найден`);
      }
  }

  getPokemonsInfoByName('bulbasaur').then(res => console.log(res));