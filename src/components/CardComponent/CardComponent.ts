import type { PokemonInfoStructure } from "../../types.js";
import Component from "../Component/Component.js";

class CardComponent extends Component {
  private readonly pokemon: PokemonInfoStructure;

  constructor(parentElement: Element, pokemon: PokemonInfoStructure) {
    super(parentElement, "pokemon__card", "li");
    this.pokemon = pokemon;
    this.render();
  }

  public render() {
    super.render();

    this.domElement.innerHTML = `
    <h2 class="pokemon__name">${this.pokemon.name}</h2>
    <img class="pokemon__image" src="${this.pokemon.image}" alt="${this.pokemon.name}">`;
  }
}

export default CardComponent;
