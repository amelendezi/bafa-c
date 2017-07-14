import './title.css';
import { h } from 'maquette';

/**
 * Creates a title
 * @param {*} text
 */
export var createTitle = function (text) {
    return {
        renderMaquette: function () {
            return h('h1.title', text);
        }
    }
}