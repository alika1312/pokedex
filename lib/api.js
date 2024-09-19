
export const getAllPokemons = async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_PATH}pokemon?limit=100000&offset=0`)
    const data = await response.json()
    return data
} catch(e) {
    console.error(e)
  }
}

export const getPokemon = async (pokemonName) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_PATH}pokemon/${pokemonName}`);
    const data = await response.json();
    return data;
  } catch(e) {
    console.error(e);
  }
};
export const getPokemonType = async (type) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_PATH}type/${type}`);
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
  }
};






