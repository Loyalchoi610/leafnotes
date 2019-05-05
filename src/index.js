// index.js
import TreeController from './controller/treeController'
function component () {
    var element = document.createElement('div');
    element.innerHTML = new TreeController().getData();
    return element;
}

document.body.appendChild(component());
