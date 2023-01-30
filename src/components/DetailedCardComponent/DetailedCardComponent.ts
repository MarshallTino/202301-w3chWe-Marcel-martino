import type { PokemonInfoStructure } from "../../types.js";
import Component from "../Component/Component.js";

class DetailedCardComponent extends Component {
  private readonly pokemon: PokemonInfoStructure;

  constructor(parentElement: Element, pokemon: PokemonInfoStructure) {
    super(parentElement, "detailedPokemon__card", "div");
    this.pokemon = pokemon;
    this.render();
  }

  public render() {
    super.render();

    this.domElement.innerHTML = `
    
    <img class="detailed__pokemon__image" src="${this.pokemon.image}" alt="${this.pokemon.name}">
    <div class="detailed__pokemon__stats"><h2 class="detailed__pokemon name">Name: ${this.pokemon.name}</h2>
      <h2 class="detailed__pokemon weight">Weight: ${this.pokemon.weight} kg</h2>
      <h2 class="detailed__pokemon baseExperience">Base Experience: ${this.pokemon.baseExperience} XP</h2>
      <h2 class="detailed__pokemon height">Height: ${this.pokemon.height} cm</h2></div>`;
  }
}

export default DetailedCardComponent;
