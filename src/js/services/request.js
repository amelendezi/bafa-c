import 'maquette';
import { getProjector } from '../main.js';
import './requestConfig.js';

var load = (requestConfig) => {

    var xhr = new XMLHttpRequest();
    xhr.addEventListener('load', () => {        
                
        // Parse the response as JSON
        var json = JSON.parse(xhr.responseText);
        
        // We update the model
        requestConfig.callback(json);
        
        // Schedule a render
        getProjector().scheduleRender(); // This seems to not be working correctly.
    });
    
    xhr.open(requestConfig.method, requestConfig.requestUrl);
    xhr.send();    
}

export var request = {        
    doSampleRequest: load
}