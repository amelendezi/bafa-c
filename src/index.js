import _ from 'lodash';
import printMe from './print.js';
import 'jquery';

function load() {
  var element = document.createElement('div');
  element.setAttribute('id', 'main');    
  return element;
}

document.body.appendChild(load());
$('#main').html("This was set by jQuery");