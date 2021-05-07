import { createHome } from "./home-app";
import { createInteractua } from "./interactua-app";
import {createLogin } from './login-app';
import {createPlanes} from './plans-app';
import {createRegister} from './register-app';
import {createConozcamonos} from './conozcamonos-app';


const init = (container)=>{
    createHtml(container);
};


const createSecticions = ()=>{
    createHome();
    createLogin();
    createPlanes();
    createRegister();
    createConozcamonos();
    createInteractua();

};

const createHtml = (container)=>{
    const wrapper = document.createElement('div');
    wrapper.id    = 'wrapper-html';
    wrapper.classList = 'wrapper__html';
    const main = document.getElementById(container);
    main.appendChild(wrapper);
    wrapper.appendChild(createHeader());
    wrapper.appendChild(createMain(setSection));
    wrapper.appendChild(createFooter());
    createSecticions();
};


const createHeader = ()=>{
    const wrapper = document.createElement('div');
    wrapper.id    = 'wrapper-header';
    wrapper.classList = 'wrapper__header';
    wrapper.innerHTML = `
    <header>
        <div id="wrapper-nav" class="wrapper__nav">
            <nav>
                <div id="wrapper-content" class="wrapper__content">
                    <div class="nav__li">
                        <li class="nav__item"><a href="#planes" data-target="plan" class="nav__link">PLANES</a></li>
                        <li class="nav__item"><a href="#interactua" data-target="interactua" class="nav__link">INTERACTUA</a></li>
                        <li class="nav__item3"><a href="#home" class="nav__link active"><img data-target="home" class="nav__img" src="./assets/front.jpg" alt="front"><div><span class="nav__img__title" data-target="home">SOFTWARE</span></div></a></li>
                        <li class="nav__item"><a href="#conozcamonos" data-target="conozcamonos" class="nav__link">CONOZCAMONOS</a></li>
  
                        <div class="nav__btn">
                        <a href="#login" class="nav__link"><button class="btn__login" id="btn-login" data-target="login"><span data-target="login" class="txt__btn">INGRESAR</span></button></a>
                        <a href="#count" class="nav__link"><button class="btn__count" id="btn-count" data-target="count"><span data-target="count" class="txt__btn">CREAR CUENTA</span></button></a>
                        </div>
                     </div>   
                </div> 
            </nav>
        </div>
        <div class="wrapper__messaje">
            <span class="messaje__hour">Llamanos 3117166194</span>
            <span class="messaje__hour2">8am a 6pm</span>
        </div>
    </header>`;

    return wrapper;
};


const createMain = (event)=>{
    const wrapper = document.createElement('div');
    wrapper.id    = 'wrapper-main';
    wrapper.classList = 'wrapper__main';
    const main = document.createElement('main');
    main.appendChild(createSections());
    const sectionNav = Array.from(document.querySelectorAll('[data-target]'));
    sectionNav.map((element)=>{element.addEventListener('click', event)});   
    wrapper.appendChild(main);
    return wrapper;
};


const createSections = ()=>{
    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper-sections';
    wrapper.classList = 'wrapper__sections';
    wrapper.innerHTML = `
    <div data-content id="wrapper-home" class="wrapper__home activo"></div>
    <div data-content id="wrapper-plan" class="wrapper__plan"></div>    
    <div data-content id="wrapper-conozcamonos" class=""></div>
    <div data-content id="wrapper-interactua" class=""></div>
    <div data-content id="wrapper-conozcamonos" class="">Aqui va conozcamonos</div>
    <div data-content id="wrapper-login" class="wrapper__login"></div>
    <div data-content id="wrapper-count" class="wrapper__count"></div>
    <div data-content id="wrapper-contacto" class="">Aqui va contacto</div>`;
    

    return wrapper;
};


const setSection = (ev)=>{
    const content = Array.from(document.querySelectorAll('[data-content]'));
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
    </footer>`

    return wrapper;
}


export{init};