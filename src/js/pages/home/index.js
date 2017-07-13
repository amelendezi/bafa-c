import { headerSection } from '../../header/header.js';
import { bodySection } from './body.js';

/**
 * Home Page composed of a header section and body section.
 */
export var homePage = {

    renderMaquette: function (h) {
        return h('h1', headerSection.renderMaquette(h), bodySection.renderMaquette(h));
    }

}