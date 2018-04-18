import Widget from "../../Blocks/Widget.js";



export default class LoaderView {

    show() {
        let loader = new Widget(document.body, "div", "launcher");
        let loaderHTML = "<div id=\"preloader\">" +
                         "<div id=\"loader\"></div>" +
                         "</div>";
        loader.element.innerHTML = loaderHTML;
        debugger;
    }
    hide() {
        let elem = document.getElementsByClassName("launcher");
        if (elem[0]) {
            document.body.removeChild(elem[0]);
        }
        elem = null;
    }
}
