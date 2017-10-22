import _ from 'lodash';
import './style.css';
// import Icon from './icon.png';
import Data from './data.xml';

function component() {
	var element = document.createElement('div');
	// this statement needs to include Loadash library to work
	element.innerHTML = _.join(['Hello', 'Webpack'], '');
	element.classList.add('hello');

	// var myImg = document.createElement('img');
	// myImg.src = Icon;

	// element.appendChild(myImg);

	console.log(Data);

	return element;
}

document.body.appendChild(component());