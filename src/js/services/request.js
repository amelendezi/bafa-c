import { getProjector } from '../main.js';

var load = (updateModel) => {
    
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('load', () => {        
                
        // Parse the response as JSON
        var json = JSON.parse(xhr.responseText);

        // We update the model
        updateModel(json);
                
        // Maquette requires the projector to re-render
        getProjector().scheduleRender();
    });

    xhr.open('GET', 'http://localhost/ServerSim/?requestId=001');
    xhr.send();    
}

export var request = {        
    doSampleRequest: load
}