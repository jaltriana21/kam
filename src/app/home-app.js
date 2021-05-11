const createHome = ()=>{
    const wrapper = document.getElementById('wrapper-home');
    wrapper.appendChild(createImgHeader());
    wrapper.appendChild(createGalery());
    wrapper.appendChild(createPlans());
    wrapper.appendChild(createCaracteristics());
    wrapper.appendChild(createClients());
    const sectionNav = Array.from(document.querySelectorAll('[data-target]'));
    sectionNav.map((element)=>{element.addEventListener('click', setSection)});
    return wrapper;
}


const createImgHeader = ()=>{
    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper-img-home';
    wrapper.classList = 'wrapper__img__home';
    wrapper.innerHTML = `
    <div class="title__img">
        <img class="home__img__one" src="./assets/0.png" alt="">
    </div>
    <div class="title__img__txt">
        <span class="description__home">Dile hola,</span>
        <p class="description__home2">KAM un software hecho a la medida de grandes emprendedores.</p>
    </div>`
    return wrapper;
}


const createGalery = ()=>{
    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper-galery';
    wrapper.classList = 'wrapper__galery';
    wrapper.innerHTML = `
    <div class="galery">
        <div class="content__galery"><iframe class="galery__img" src="https://www.youtube.com/embed/K5Ym0KLZyOE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div class="content__galery"><iframe class="galery__img" src="https://www.youtube.com/embed/K5Ym0KLZyOE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div class="content__galery"><iframe class="galery__img1" src="https://www.youtube.com/embed/K5Ym0KLZyOE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><iframe class="galery__img2" src="https://www.youtube.com/embed/K5Ym0KLZyOE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
    </div>`;
    return wrapper;
}

const createPlans = ()=>{
    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper-plans';
    wrapper.classList = 'wrapper__plans';
    wrapper.innerHTML = `
    <div class="plan__txt">
        <span>Planes</span>
    </div>
    <div class="planes">
        <div class="content__plan plan1">Plan A</div>
        <div class="content__plan plan2">Plan B</div>
        <div class="content__plan plan3">Plan C</div>
        <div class="content__plan plan4">Plan D</div>
    </div>
    <br>
    <div class="content__btn__plan">
     <button class="btn__plan" id="btn-plan"><a href="#plan" class="nav__link"><span data-target="plan" class="txt__btn__plan">Ver precios ></span></a></button>
    </div>`;
    return wrapper;
}


const createCaracteristics = ()=>{
    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper-caracteristics';
    wrapper.classList = 'wrapper__caracteristics';
    wrapper.innerHTML = `
        <div class="caracteristics">
            <i class='bx bxs-mobile'></i>
                <div class="content__caracteristics">
                    <span>Más rapido,</span>
                    <span class="txt__caracteristics">Siempre pensando en el tiempo que inviertes en tu negocio y en tu familia.</span>
                </div>
        </div>

        <div class="caracteristics">
            <i class='bx bxs-mobile'></i>
                <div class="content__caracteristics">
                    <span>Más simple,</span>
                    <span class="txt__caracteristics">Esto te permitira hacerlo sencillo hasta tus hijos podran ayudarte en tu negocio</span>
                </div>
        </div>

        <div class="caracteristics">
            <i class='bx bxs-mobile'></i>
                <div class="content__caracteristics">
                    <span>Más accesible,</span>
                    <span class="txt__caracteristics">Te imaginaste tener todo en la palma de tu mano</span>
                </div>
        </div>

        <div class="caracteristics">
            <i class='bx bxs-mobile'></i>
                <div class="content__caracteristics">
                    <span>Más organizado,</span>
                    <span class="txt__caracteristics">Deja tu cuaderno, deja de llevar cálculos en tu mente deja que el software haga eso por ti</span>
                </div>
        </div>

        <div class="caracteristics">
            <i class='bx bxs-mobile'></i>
                <div class="content__caracteristics">
                    <span>Más personalizado,</span>
                    <span class="txt__caracteristics">Este programa te permitira adaptarlo a tu empresa</span>
                </div>
        </div>

        <div class="caracteristics">
            <i class='bx bxs-mobile'></i>
                <div class="content__caracteristics">
                    <span>Más seguro,</span>
                    <span class="txt__caracteristics">Al estar en la nube debes estar seguro que tu informacion estará siempre disponible desde cualquier lugar del mundo</span>
                </div>
        </div>
        
        <div class="caracteristics__btn">
        <button class="btn__caracteristics" id="btn-caracteristics"><a href="#conozcamonos" class="nav__link"><span data-target="conozcamonos" class="txt__btn__caracteristics">Contactanos ></span></a></button>
        </div>`;
    return wrapper;
}


const createClients = ()=>{
    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper-clients';
    wrapper.classList = 'wrapper__clients';
    wrapper.innerHTML = `
    <div class="client">
        <div class="content__client">
            <img class="client__img" src="./assets/1.jpg" alt="client">
        </div>
        <div class="content__client">
            <article class="client__txt">''Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat hic recusandae et ipsum fugit voluptate numquam odit, maxime facilis deleniti iste earum. Ab placeat cum, a consequuntur facilis laboriosam! Magni.''</article>
        </div>
    </div>
    <div class="content__leyend">
        <span>Nuestros clientes hablan de su experiencia</span>
    </div>`;

    return wrapper;
}

const setSection = (ev)=>{
    const content = Array.from(document.querySelectorAll('[data-content]'));
    content.map((element)=>{element.classList.remove('activo')});
    const id = ev.target.dataset.target;
    const selectSection = document.getElementById(`wrapper-${id}`);
    selectSection.classList.add('activo');
};

export{createHome};