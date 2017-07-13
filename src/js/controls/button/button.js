import './button.css';

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
        renderMaquette: function (h) {
            return h('button.btn', { onclick: handleClick }, label);
        }
    };
}