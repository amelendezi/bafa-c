import { h } from 'maquette';
import { headerSection } from './header/header.js';
import { bodySection } from './body/body.js';

/**
 * HomePage composed of a header section and body section.
 */
export var homePage = {
    renderMaquette: function () {
        return h('h1', headerSection.renderMaquette(), bodySection.renderMaquette());
    }
}