import './title.css';

/**
 * Creates a title
 * @param {*} text
 */
export var createTitle = function (text) {
    return {
        renderMaquette: function (h) {
            return h('h1.title', text);
        }
    }
}