import './button.css';
import { h } from 'maquette';

/**
 * Creates a button
 * @param {*} label 
 * @param {*} onClick 
 */
export var createButton = function (label, onClick) {
    function handleClick(evt) {
        evt.preventDefault();
        onClick();
    }

    return {
        renderMaquette: function () {
            return h('button.btn', { onclick: handleClick }, label);
        }
    };
}