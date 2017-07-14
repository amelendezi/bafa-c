import './subtitle.css';
import { h } from 'maquette';

/**
 * Creates a subtitle
 * @param {*} text 
 */
export var createSubtitle = function (text) {
    return {
        renderMaquette: function () {
            return h('div.subtitle', text);
        }
    };
}