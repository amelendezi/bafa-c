import './header.css';
// import { createLink } from '../common/link/link.js';

export function loadHeader(h) {
    return h('div#header', [loadTitle(h), loadSubtitle(h)]);
}

function loadTitle(h) {
    return h('div#title', 'BAFA Client Application');
}

function loadSubtitle(h) {
    return h('div#subtitle', [
        'Sample application that is testing the Maquettejs library developed by Johan Gorter. You can see the main website for this library at ',
        createLink(h, 'http://maquettejs.org', 'Maquettejs'),
        '. Here you can find tutorials and other resources.']);
}

function createLink(h, link, name) {
    return h('a', { href: link }, name);
}