import './header.css';

export function loadHeader(h) {
    return h('div#header', [loadTitle(h), loadSubtitle(h), loadButton(h)]);
}

function loadTitle(h) {
    return h('div#title', 'BAFA Client Application');
}

function loadSubtitle(h) {
    return h('div#subtitle', ['Sample application that is testing the Maquettejs library developed by Johan Gorter.']);
}

function loadButton(h) {      
    return h('button#toggle', {type :'button'}, 'Toggle Content');
}