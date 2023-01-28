import type { PokemonDataStructure } from "../../types";

const getPokemonInfo = async (url: string, id: number) => {
  const response = await fetch(`${url}${id}`);
  const pokemonInfo = (await response.json()) as PokemonDataStructure;

  return pokemonInfo;
};

export default getPokemonInfo;
