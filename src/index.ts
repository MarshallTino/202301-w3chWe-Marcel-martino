import HeaderComponent from "./components/HeaderComponent/HeaderComponent.js";
import PageComponent from "./components/PageComponent/pageComponent.js";
import pageComponent from "./components/PageComponent/pageComponent.js";
import getPokemonInfo from "./utils/getPokemonInfo/getPokemonInfo.js";
import getPokemonList from "./utils/getPokemonList/getPokemonList.js";

const url = "https://pokeapi.co/api/v2/pokemon/";

const page = new PageComponent(document.body);
page.render();

const header = new HeaderComponent(page.domElement);
header.render();
