import PageComponent from "./components/PageComponent/pageComponent.js";
import pageComponent from "./components/PageComponent/pageComponent.js";
import getPokemonInfo from "./utils/getPokemonInfo/getPokemonInfo.js";
import getPokemonList from "./utils/getPokemonList/getPokemonList.js";

const url = "https://pokeapi.co/api/v2/pokemon/";

console.log("hola");
console.log(getPokemonList(url));
console.log(getPokemonInfo(url, 25));

const page = new PageComponent(document.body);

page.render();
