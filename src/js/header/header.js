import 'maquette';
import './header.css';

export function loadHeader() {

    var h = maquette.h;
    var projector = maquette.createProjector();

    function renderMaquette() {
        return h('div.header', [
            h('div.title', 'Bafa Client Application'),
            h('div.subtitle','This is a sample application used to test out the javascript library Maquettejs.')
        ]);
    }

    document.addEventListener('DOMContentLoaded', function () {
        projector.append(document.body, renderMaquette);
    });
}