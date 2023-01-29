import type { PokemonDataStructure } from "../../types";

const getPokemonInfo = async (url: string, id: number) => {
  const response = await fetch(`${url}${id}`);
  const pokemonInfo = (await response.json()) as PokemonDataStructure;

  const pokeInfo = {
    name: pokemonInfo.name,
    weight: pokemonInfo.weight,
    image: pokemonInfo.sprites.other.dream_world.front_default,
  };
  return pokeInfo;
};

const url = "https://pokeapi.co/api/v2/pokemon/";
const pokemonArrayOfObjects = [] as any[];

(async (url: string, idRange: { min: number; max: number }) => {
  const pokemonInfoList = [] as any[];

  for (let id = idRange.min; id <= idRange.max; id++) {
    pokemonInfoList.push(getPokemonInfo(url, id));
  }

  const pokeInfoArray = await Promise.all(pokemonInfoList);

  pokemonArrayOfObjects.push(...pokeInfoArray);
})(url, { min: 1, max: 50 });

export default pokemonArrayOfObjects;
