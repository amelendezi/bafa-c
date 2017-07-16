import { getProjector } from '../main.js';

var load = () => {

    var xhr = new XMLHttpRequest();
    xhr.addEventListener('load', () => {        
        // Parse the response as JSON
        var json = JSON.parse(xhr.responseText);

        // Next step: push the model and update the model with the response.
        console.log(json);

        // Maquette requires the projector to re-render
        getProjector().scheduleRender();
    });

    xhr.open('GET', 'http://localhost/ServerSim/?requestId=001');
    xhr.send();
}

export var request = {
    doSampleRequest: load
}