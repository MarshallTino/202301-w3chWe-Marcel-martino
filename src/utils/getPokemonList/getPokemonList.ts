import type { PokemonsListStructure } from "../../types";

const getPokemonList = async (url: string) => {
  const response = await fetch(url);
  const pokemonList = (await response.json()) as PokemonsListStructure;
  return pokemonList;
};

export default getPokemonList;
