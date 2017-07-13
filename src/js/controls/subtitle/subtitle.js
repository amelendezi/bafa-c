import './subtitle.css';

/**
 * Creates a subtitle
 * @param {*} text 
 */
export var createSubtitle = function(text) {
    return {
        renderMaquette : function(h) {
            return h('div.subtitle', text);
        }
    };
}