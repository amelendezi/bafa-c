import 'maquette';
export default function initialize() {    
    var h = maquette.h;
    var projector = maquette.createProjector();

    function renderMaquette() {
        return h('div.maquetteRender', 'Hello, this is printed with maquette');
    }

    document.addEventListener('DOMContentLoaded', function () {
        projector.append(document.body, renderMaquette);
    });
}