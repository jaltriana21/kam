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
};


const createHeader = ()=>{
    const wrapper = document.createElement('div');
    wrapper.id    = 'wrapper-header';
    wrapper.classList = 'wrapper__header';
    wrapper.innerHTML = `
    <header>
        <div id="wrapper-messaje" class="wrapper__messaje">
            <span>Atencion....</span>
        </div>
        <div id="wrapper-nav" class="wrapper__nav">
            <nav>
                <div id="wrapper-content" class="wrapper__content">
                    <ul class="nav__list">
                        <li class="nav__item"><a href="#home" data-target="home" class="nav__link active">inicio</a></li>
                        <li class="nav__item"><a href="#planes_y_caracteristicas" data-target="plan" class="nav__link">planes y caracteristicas</a></li>
                        <li class="nav__item"><a href="#interactua" data-target="interactua" class="nav__link">interactua</a></li>
                        <li class="nav__item"><a href="#conozcamonos" data-target="conozcamonos" class="nav__link">conozcamonos</a></li>
                        <button class="btn__login" id="btn-login"><a href="#login" data-target="login" class="nav__link">Login</a></button>
                        <button class="btn__count" id="btn-count"><a href="#count" data-target="count" class="nav__link">Crear cuenta</a></button>
                    </ul>
                </div> 
            </nav>
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
    <div data-content id="wrapper-home" class="activo">Aqui va el inicio</div>
    <div data-content id="wrapper-plan" class="">Aqui van los planes</div>
    <div data-content id="wrapper-interactua" class="">Aqui va interactuar</div>
    <div data-content id="wrapper-conozcamonos" class="">Aqui va conozcamonos</div>
    <div data-content id="wrapper-login" class="">Aqui van login</div>
    <div data-content id="wrapper-count" class="">Aqui van create count</div>`;

    return wrapper;
};


const setSection = (ev)=>{
    const content = Array.from(document.querySelectorAll('[data-content]'));
    content.map((element)=>{element.classList.remove('activo')});
    const id = ev.target.dataset.target;
    const selectSection = document.getElementById(`wrapper-${id}`);
    selectSection.classList.add('activo');
};


export{init};