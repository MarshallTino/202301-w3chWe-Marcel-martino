import Component from "../Component/Component.js";

class PageComponent extends Component {
  constructor(parentElement: HTMLElement) {
    super(parentElement, "app", "main");
  }

  public render() {
    super.render();
    this.domElement.innerHTML = `
  
    `;
  }
}

export default PageComponent;
