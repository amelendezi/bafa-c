import './body.css';
import { h } from 'maquette';
import { request } from '../../../services/request.js';

var model = {
    message: 'This is the page body',    
}

var clicked = true;

export var load = () => {
    request.doSampleRequest(model);    
};

export var bodySection = {        
    renderMaquette: function () {
        return h('div.body', model.message);
    }
}