import Component from "../Component/Component.js";

class HeaderComponent extends Component {
  constructor(parentElement: HTMLElement) {
    super(parentElement, "page__header", "header");
  }

  public render() {
    super.render();
    this.domElement.innerHTML = `
    <h1>Pokemon</h1>
    <img src= "pokemon-logo.svg" alt="pokemon logo" width="135" height="50">
    
    `;
  }
}

export default HeaderComponent;
