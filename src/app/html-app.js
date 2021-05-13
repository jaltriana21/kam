import {createHome} from "./home-app";
import {createInteract} from "./interactua-app";
import {createLogin} from './login-app';
import {createPlanes} from './plans-app';
import {createRegister} from './register-app';
import {createConozcamonos} from './conozcamonos-app';
import header from '../html/html-header.html';
import main from '../html/html-main.html';
import footer from '../html/html-footer.html';


const init = (container) => {
    createWrapper(container);
    showSections();
    events();
};


const createWrapper = (container) => {
    const main = document.getElementById(container);
    main.appendChild(createLayout());
};


const createLayout = (container) => {
    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper-html';
    wrapper.classList = 'wrapper__html';
    addSectionsLayout(wrapper);
    return wrapper;
};


const addSectionsLayout = (wrapper) => {
    wrapper.appendChild(createHeader());
    wrapper.appendChild(createMain());
    wrapper.appendChild(createFooter());
};


const showSections = () => {
    createHome();
    createLogin();
    createPlanes();
    createRegister();
    createConozcamonos();
    createInteract();
};


const events = () => {
    addEventsMainNav();
};


const createHeader = () => {
    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper-header';
    wrapper.classList = 'wrapper__header';
    wrapper.innerHTML = header;
    return wrapper;
};


const createMain = () => {
    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper-main';
    wrapper.classList = 'wrapper__main';
    const main = document.createElement('main');
    main.appendChild(createSections());
    wrapper.appendChild(main);
    return wrapper;
};


const createSections = () => {
    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper-sections';
    wrapper.classList = 'wrapper__sections';
    wrapper.innerHTML = main;
    return wrapper;
};


const createFooter = () => {
    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper-footer';
    wrapper.classList = 'wrapper__footer';
    wrapper.innerHTML = footer;
    return wrapper;
};


const addEventsMainNav = () => {
    addEventItemMenu('planes', setSection);
    addEventItemMenu('interactua', setSection);
    addEventItemMenu('home', setSection);
    addEventItemMenu('conozcamonos', setSection);
    addEventItemMenu('login', setSection);
    addEventItemMenu('count', setSection);
};


const addEventItemMenu = ( id, ev ) => {
    const el = document.getElementById(id);
    el.addEventListener('click', ev);
};


const setSection = (ev) => {
    const wrapper = document.getElementsByClassName('wrapper__nav');
    const content = [].slice.call(wrapper);
    content.map((element)=>{element.classList.remove('activo')});
    const id = ev.target.dataset.target;
    const selectSection = document.getElementById(`wrapper-${id}`);
    selectSection.classList.add('activo');
};


export{init};