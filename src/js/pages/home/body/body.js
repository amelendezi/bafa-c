import './body.css';
import { h } from 'maquette';
import { request } from '../../../services/request.js';

var model = {    
    message: 'This is the page body',    
}

var updateModel = (json) => {
    model.message = json['response']['message'];
};

export var load = () => {
    request.doSampleRequest(updateModel);    
};

export var bodySection = {        
    renderMaquette: function () {
        return h('div.body', model.message);
    }
}