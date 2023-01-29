import Component from "../Component/Component.js";

class HeaderComponent extends Component {
  constructor(parentElement: Element) {
    super(parentElement, "page__header", "header");
  }

  public render() {
    super.render();
    this.domElement.innerHTML = `
    <img class="header__image" src= "pokemon-logo.svg" alt="pokemon logo" width="135" height="50">
      <div class="header__navbar">
      <ul> 
      <li><a href="">Pokemons</a></li> 
      <li><a href="">Favourites</a></li> 
      </ul> 
      </div>
    `;
  }
}

export default HeaderComponent;
