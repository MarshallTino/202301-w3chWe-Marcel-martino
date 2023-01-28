import Component from "../Component/Component.js";
import HeaderComponent from "../HeaderComponent/HeaderComponent.js";

class PageComponent extends Component {
  constructor(parentElement: HTMLElement) {
    super(parentElement, "app", "main");
  }

  public render() {
    super.render();
    const header = new HeaderComponent(this.domElement);
    header.render();
  }
}

export default PageComponent;
