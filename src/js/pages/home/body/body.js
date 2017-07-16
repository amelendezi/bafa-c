import './body.css';
import { h } from 'maquette';

let model = {
    message: 'This is the page body'
}

export var load = () => {
    model.message = 'You clicked!';
};

export var bodySection = {    
    renderMaquette: function () {
        return h('div.body', model.message);
    }
}