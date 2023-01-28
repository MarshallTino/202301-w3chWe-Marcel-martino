import type { PokemonDataStructure } from "../../types";

export const getPokemonInfo = async (url: string, id: number) => {
  const response = await fetch(`${url}${id}`);
  const pokemonInfo = (await response.json()) as PokemonDataStructure;

  const pokeInfo = {
    name: pokemonInfo.name,
    weight: pokemonInfo.weight,
    image: pokemonInfo.sprites.other.dream_world.front_default,
  };
  return pokeInfo;
};

export const getAllPokemonInfo = async (
  url: string,
  idRange: { min: number; max: number }
) => {
  const promises = [];
  for (let id = idRange.min; id <= idRange.max; id++) {
    promises.push(getPokemonInfo(url, id));
  }

  const pokeInfoArray = await Promise.all(promises);
  return pokeInfoArray;
};
