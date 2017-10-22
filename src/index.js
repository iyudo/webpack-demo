import _ from 'lodash';

function component() {
	var element = document.createElement('div');
	// this statement needs to include Loadash library to work
	element.innerHTML = _.join(['Hello', 'Webpack'], '');
	return element;
}

document.body.appendChild(component());