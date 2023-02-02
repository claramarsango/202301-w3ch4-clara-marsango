import Component from './Component.js';
import Header from './Header/Header.js';

const divContainer = document.querySelector<HTMLElement>('.container');
const exampleHeader = new Header('My Series', divContainer, 'main-header');
exampleHeader.render();
