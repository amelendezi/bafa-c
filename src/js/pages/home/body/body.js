import './body.css';
import { h } from 'maquette';
import { request } from '../../../services/request.js';
import { requestConfig } from '../../../services/requestConfig.js';

/**
 * Main model for the body section.
 */
var model = {
    message: 'This is the page body'    
}

/**
 * Callback function for server request
 * @param {*} json 
 */
var updateModel = (json) => {
    model.message = json['response']['message'];    
};

/**
 * Does a sample request 1 to the server and loads the model.
 */
export var doSampleRequest1 = () => {
    console.log('DoSampleRequest1');
    var config = new requestConfig('http://localhost/ServerSim/?requestId=001', 'GET', updateModel);
    request.doSampleRequest(config);
};

/**
 * Does a sample request 2 to the server and loads the model.
 */
export var doSampleRequest2 = () => {
    console.log('DoSampleRequest2');
    var config = new requestConfig('http://localhost/ServerSim/?requestId=002', 'GET', updateModel);
    request.doSampleRequest(config);
};

/**
 * BodySection of the page with rendering function
 */
export var bodySection = {
    renderMaquette: function () {
        return h('div.body', model.message);
    }
}