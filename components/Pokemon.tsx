

function getPokemon (name: string) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Pokémon not found: ${name}`);
      }
      return res.json();
    });
}

export async function getPokemonData (names: string[]) {
  const promises = names.map((name) => getPokemon(name));
  return Promise.all(promises);
}

export async function getStarterPokemon () {
  const starterNames = ["Treecko", "Torchic", "Mudkip"];
  return getPokemonData(starterNames);
}