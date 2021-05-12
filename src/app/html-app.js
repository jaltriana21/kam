import {createHome} from "./home-app";
import {createInteract} from "./interactua-app";
import {createLogin} from './login-app';
import {createPlanes} from './plans-app';
import {createRegister} from './register-app';
import {createConozcamonos} from './conozcamonos-app';
import header from '../html/html-header.htm';

const init = (container)=>{
    createWrapper(container);
    showSections();
};

const createLayout = () => {
    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper-html';
    wrapper.classList = 'wrapper__html';
    addSectionsLayout(wrapper);
    return wrapper;
};

const addSectionsLayout = (wrapper) => {
    wrapper.appendChild(createHeader());
    wrapper.appendChild(createMain(setSection));
    wrapper.appendChild(createFooter());
};


const createWrapper = (container)=>{
    const main = document.getElementById(container);
    main.appendChild(createLayout());
};

const showSections = ()=>{
    createHome();
    createLogin();
    createPlanes();
    createRegister();
    createConozcamonos();
    createInteract();
};

const createHeader = ()=>{
    const wrapper = document.createElement('div');
    wrapper.id    = 'wrapper-header';
    wrapper.classList = 'wrapper__header';
    wrapper.innerHTML = header;
    return wrapper;
};

const addEventItemMenu = ( id, ev ) => {
    const el = document.getElementById(id);
    el.addEventListener('click', ev);
};

const addEventsMainNav = () => {
    addEventItemMenu('planes', setSection);
    addEventItemMenu('interactua', setSection);
    addEventItemMenu('home', setSection);
    addEventItemMenu('conozcamonos', setSection);
};

const createMain = ()=>{
    const wrapper = document.createElement('div');
    wrapper.id    = 'wrapper-main';
    wrapper.classList = 'wrapper__main';
    const main = document.createElement('main');
    main.appendChild(createSections());
    addEventsMainNav();
    wrapper.appendChild(main);
    return wrapper;
};

const createSections = ()=>{
    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper-sections';
    wrapper.classList = 'wrapper__sections';
    wrapper.innerHTML = `
    <div data-content id="wrapper-home" class="wrapper_nav wrapper__home activo"></div>
    <div data-content id="wrapper-plan" class="wrapper_nav wrapper__plan"></div>    
    <div data-content id="wrapper-conozcamonos" class="wrapper_nav wrapper__conozcamonos"></div>
    <div data-content id="wrapper-interactua" class="wrapper_nav wrapper__interactua"></div>
    <div data-content id="wrapper-login" class="wrapper_nav wrapper__login"></div>
    <div data-content id="wrapper-count" class="wrapper_nav wrapper__count"></div>`;
    
    return wrapper;
};

const setSection = (ev)=>{
    const wrapper = document.getElementsByClassName('wrapper_nav');//document.getElementById('wrapper-sections').getElementsByTagName('div');
    const content = [].slice.call(wrapper);
    content.map((element)=>{element.classList.remove('activo')});
    const id = ev.target.dataset.target;
    const selectSection = document.getElementById(`wrapper-${id}`);
    selectSection.classList.add('activo');
};

const createFooter = ()=>{
    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper-footer';
    wrapper.classList = 'wrapper__footer';
    wrapper.innerHTML = `
    <footer>
        <div class="footer__icons">
            <a href="https://www.facebook.com/" target="_blank" class="nav__link"><i class='icn bx bxl-facebook-circle'></i></a>
        </div>
        <div class="footer__icons">
            <a href="https://www.facebook.com/" target="_blank" class="nav__link"><i class='icn bx bxl-twitter'></i></a>
        </div>
        <div class="footer__icons">
            <a href="https://www.facebook.com/" target="_blank" class="nav__link"><i class='icn bx bxl-facebook'></i></a>
        </div>
    </footer>`;

    return wrapper;
};


export{init};