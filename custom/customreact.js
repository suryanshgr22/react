
function customRender(reactElement, container){
    const elem = document.createElement(reactElement.type);
    elem.innerHTML = reactElement.children;
    for (const prop in reactElement.props) {
        elem.setAttribute(prop, reactElement.props[prop]);
    }
    console.log(elem);
    container.appendChild(elem);
}
const container = document.querySelector('#root');

const reactElement = {
    type : 'a',
    props : {
        class : "heading"
    },
    children : "Hello this is custom react"
}
// container.innerHTML = "hello";
customRender(reactElement, container);
