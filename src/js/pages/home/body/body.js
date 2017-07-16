import './body.css';
import { h } from 'maquette';
import { request } from '../../../services/request.js';

var model = {
    message: 'This is the page body',    
}

export var load = () => {

    // When the button is pressed it calls this 
    // functin. That calls the request that goes to 
    // the server and the server responds with a message.

    request.doSampleRequest(model);    
};

export var bodySection = {        
    renderMaquette: function () {
        return h('div.body', model.message);
    }
}