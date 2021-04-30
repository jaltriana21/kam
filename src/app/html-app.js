import { createHome } from "./home-app";


const init = (container)=>{
    createHtml(container);
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
    createHome();
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
                        <li class="nav__item nav__item3"><a href="#home" class="nav__link active"><img data-target="home" class="nav__img" src="./assets/front.jpg" alt="front"><div><span class="nav__img__title" data-target="home">SOFTWARE</span></div></a></li>
                        <li class="nav__item"><a href="#conozcamonos" data-target="conozcamonos" class="nav__link">CONOZCAMONOS</a></li>
  
                        <div class="nav__btn">
                        <button class="btn__login" id="btn-login"><a href="#login" class="nav__link"><span data-target="login" class="txt__btn">INGRESAR</span></a></button>
                        <br>
                        <button class="btn__count" id="btn-count"><a href="#count" class="nav__link"><span data-target="count" class="txt__btn">CREAR CUENTA</span></a></button>
                        </div>
                     </div>   
                </div> 
            </nav>
        </div>
        <div class="wrapper__messaje">
            <span class="messaje__hour">Llamanos 3117166194</span><br>
            <p class="messaje__hour2">8am a 6pm</p>
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
    const juju = document.getElementById('wrapper-home');
    wrapper.appendChild(main);
    return wrapper;
};


const createSections = ()=>{
    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper-sections';
    wrapper.classList = 'wrapper__sections';
    wrapper.innerHTML = `
    <div data-content id="wrapper-home" class="wrapper__home activo"></div>
    <div data-content id="wrapper-plan" class="wrapper__plan">Aqui van los planes</div>
    <div data-content id="wrapper-interactua" class="">Aqui va interactuar</div>
    <div data-content id="wrapper-conozcamonos" class="">Aqui va conozcamonos</div>
    <div data-content id="wrapper-login" class="">Aqui van login</div>
    <div data-content id="wrapper-count" class="">Aqui van create count</div>
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