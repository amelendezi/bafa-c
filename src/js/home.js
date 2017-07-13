import 'maquette';
import { loadHeader } from './header/header.js';
import { loadBody } from './body/body.js';

export function loadHomePage() {

    var h = maquette.h;
    var projector = maquette.createProjector();

    function renderMaquette() {
        return h('div.main', [loadHeader(h), loadBody(h)]);
    }

    document.addEventListener('DOMContentLoaded', function () {
        projector.append(document.body, renderMaquette);
    });    
}