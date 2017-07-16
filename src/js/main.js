import { h } from 'maquette';
import { homePage } from './pages/home/index.js';

var projector = null;

/**
 * Gets a created projector. Implements a singelton pattern
 * for the projector.
 */
export function getProjector() {
    if (projector === null) {
        return maquette.createProjector();
    }
    return projector;
}

/**
 * This is the main entry point of the application. Basically
 * it creates the root renderMaquette function.
 */
export function main() {
    function renderMaquette() {
        return h('div.main', [homePage.renderMaquette()]);
    }

    document.addEventListener('DOMContentLoaded', function () {
        getProjector().append(document.body, renderMaquette);
    });
}