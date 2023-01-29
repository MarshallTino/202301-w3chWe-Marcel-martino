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
    <img class="pokemon__image" src="${this.pokemon.image}" alt="${this.pokemon.name}">
    <h2 class="pokemon name">${this.pokemon.name}</h2>
    <h2 class="pokemon weight">${this.pokemon.weight} kg</h2>`;
  }
}

export default CardComponent;
