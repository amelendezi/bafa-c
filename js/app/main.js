define(function (require) {
    var $ = require('jquery'),
        lib = require('./lib'),
        controller = require('./controller/c1'),
        model = require('./model/m1'),
        maquette = require('maquette');        

    //A fabricated API to show interaction of
    //common and specific pieces.
    controller.setModel(model);
    $(function () {
        controller.render(lib.getBody());
    });

    var h = maquette.h;
    var projector = maquette.createProjector();

    function renderMaquette() {        
        return h('div.main', '<h1>This is maquette rendering.</h1>');
    }

    document.addEventListener('DOMContentLoaded', function () {
        projector.append(document.body, renderMaquette);
    });

    projector.scheduleRender();

    console.log('Did something');

});
