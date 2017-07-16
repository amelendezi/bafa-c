import './header.css';
import { h } from 'maquette';
import { createTitle } from '../../../controls/title/title.js';
import { createSubtitle } from '../../../controls/subtitle/subtitle.js';
import { createButton } from '../../../controls/button/button.js';
import { doSampleRequest1, doSampleRequest2 } from '../body/body.js';

/**
 * Main model for the header section.
 */
var model = {
    title: createTitle('BAFA Sample Application'),
    subtitle: createSubtitle('This is a sample application that is being created to test out best practices for creating frontend applications with the virtual dom library Maquettejs.'),
    button1: createButton('Request 1', doSampleRequest1),
    button2: createButton('Request 2', doSampleRequest2)
}

/**
 * HeaderSection of the page with rendering function. Renders a title, subtitle and button.
 */
export var headerSection = {
    renderMaquette: function () {
        return h('div#header', [model.title.renderMaquette(), model.subtitle.renderMaquette(), model.button1.renderMaquette(), model.button2.renderMaquette()]);
    }
};