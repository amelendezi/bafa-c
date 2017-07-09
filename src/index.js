import _ from 'lodash';
import './style.css';
import HomeIcon from './home.png';

function component() {
  var element = document.createElement('div');  
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');


  var homeIcon = new Image();
  homeIcon.src = HomeIcon;
  element.appendChild(homeIcon);

  return element;
}

document.body.appendChild(component());