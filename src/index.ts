import getPokemonInfo from "./utils/getPokemonInfo/getPokemonInfo.js";
import getPokemonList from "./utils/getPokemonList/getPokemonList.js";

const url = "https://pokeapi.co/api/v2/pokemon/";

console.log("hola");
console.log(getPokemonList(url));
console.log(getPokemonInfo(url, 20));
