import _ from 'lodash';
import './style.css';
import HomeIcon from './home.png';
import xmlData from './data.xml';

function component() {
  var element = document.createElement('div');  
  element.innerHTML = _.join(['This', 'is','a','sample','text','using','the','font','Junction.'], ' ');
  element.classList.add('hello');

  /*
  var homeIcon = new Image();
  homeIcon.src = HomeIcon;
  element.appendChild(homeIcon);
  */

  console.log(xmlData);
  return element;
}

document.body.appendChild(component());