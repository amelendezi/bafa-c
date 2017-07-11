import 'maquette';

export function renderView() {

    var h = maquette.h;
    var projector = maquette.createProjector();

    function renderMaquette() {
        return h('div.main', 'This is content being rendered by maquettejs!');
    }

    document.addEventListener('DOMContentLoaded', function () {
        projector.append(document.body, renderMaquette);
    });
}

export function renderAnotherView() {
    var h = maquette.h;
    var projector = maquette.createProjector();

    function renderMaquette() {
        return h('div.another', 'This is another view');
    }

    document.addEventListener('DOMContentLoaded', function () {
        projector.append(document.body, renderMaquette);
    });
}

