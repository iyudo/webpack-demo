import _ from 'lodash';
import printMe from './print';

function component() {
	var element = document.createElement('div');
	var btn = document.createElement('button');
	// this statement needs to include Loadash library to work
	element.innerHTML = _.join(['Hello', 'Webpack'], '');
	btn.innerHTML = 'See the console';
	btn.onclick = printMe;

	element.appendChild(btn);

	return element;
}

document.body.appendChild(component());