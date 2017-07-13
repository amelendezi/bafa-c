import './body.css';

let model = {
    message : 'This is the page body. Here you will see content being loaded.'
}

export var bodySection = {
    renderMaquette : function(h) {
        return h('div.body', model.message);  
    }
}