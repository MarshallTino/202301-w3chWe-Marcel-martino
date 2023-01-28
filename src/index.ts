import PageComponent from "./components/PageComponent/pageComponent.js";

import { getAllPokemonInfo } from "./utils/getPokemonInfo/getPokeInfoArray.js";

const url = "https://pokeapi.co/api/v2/pokemon/";

const page = new PageComponent(document.body);

page.render();

const pokeInfoArray = await getAllPokemonInfo(url, { min: 1, max: 151 });
