
import LeafController from './controller/leafController'
function component () {
    let element = document.createElement('div');
    element.innerHTML = new LeafController().getData();
    return element;
}

document.body.appendChild(component());
