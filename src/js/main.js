import { h } from 'maquette';
import { homePage } from './pages/home/index.js';

export function main() {
    var projector = maquette.createProjector();

    function renderMaquette() {
        return h('div.main', [homePage.renderMaquette()]);
    }

    document.addEventListener('DOMContentLoaded', function () {
        projector.append(document.body, renderMaquette);
    });
}