import { getProjector } from '../main.js';

var load = (model) => {
    
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('load', () => {        
                
        // Parse the response as JSON
        var json = JSON.parse(xhr.responseText);

        // We update the model
        model.message = json['response']['message'];
        
        /**
         * Up to this point, the value of model.message is correctly filled by the
         * server message that is in the json. I was hoping that on the next render
         * the value of model.message would be shown.
         */

        // Maquette requires the projector to re-render
        getProjector().scheduleRender();
    });

    xhr.open('GET', 'http://localhost/ServerSim/?requestId=001');
    xhr.send();    
}

export var request = {        
    doSampleRequest: load
}