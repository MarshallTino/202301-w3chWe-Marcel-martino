import Component from "../Component/Component.js";
import type { PokemonInfoStructure } from "../../types.js";
import CardComponent from "../CardComponent/CardComponent.js";
import pokemonArrayOfObjects from "../../utils/getPokemonInfo/getPokeInfoArray.js";

class PageComponent extends Component {
  private readonly pokemonsInfoArray;
  constructor(parentElement: Element) {
    super(parentElement, "app", "main");
    this.pokemonsInfoArray = pokemonArrayOfObjects as PokemonInfoStructure[];
  }

  public render() {
    super.render();

    this.domElement.innerHTML = `<ul class="card__container"></ul>`;

    setTimeout(() => {
      this.pokemonsInfoArray.forEach((pokemon) => {
        const parentElement = document.querySelector(".card__container");
        new CardComponent(parentElement, pokemon).render();
      });
    }, 200);
  }
}

export default PageComponent;
