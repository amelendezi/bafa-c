import _ from 'lodash';
import { loadHomePage } from './js/home.js';

loadHomePage();

document.getElementById("toggle").addEventListener("click", function () {
    console.log('Button was clicked');
});