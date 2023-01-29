import HeaderComponent from "./components/HeaderComponent/HeaderComponent.js";
import PageComponent from "./components/PageComponent/pageComponent.js";

const header = new HeaderComponent(document.body);
header.render();
const page = new PageComponent(document.body);
page.render();
