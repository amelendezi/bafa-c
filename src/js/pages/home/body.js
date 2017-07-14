import './body.css';
import { h } from 'maquette';

let model = {
    message : 'This is the page body. Here you will see content being loaded.'
}

export var bodySection = {
    renderMaquette : function() {
        return h('div.body', model.message);  
    }
}