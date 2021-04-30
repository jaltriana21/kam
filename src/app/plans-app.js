const createPlanes = ()=>{
    const wrapper = document.getElementById('wrapper-plan');   
    wrapper.appendChild(createImgHeader());  
    wrapper.appendChild(createPlans()); 
    wrapper.appendChild(createDescriptions()); 
    wrapper.appendChild(createImgsFooter()); 
    const sectionNav = Array.from(document.querySelectorAll('[data-target]'));
    sectionNav.map((element)=>{element.addEventListener('click', setSection)});
    return wrapper;
}

const createImgHeader = () =>{
    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper-planes__img';
    wrapper.classList = 'wrapper__planes__img';
    wrapper.innerHTML = `    
    <div>    
        <img class="plans__img__one" src="./assets/0.png" >  
    </div>   
    <div>     
        <span class="description__home">Nuestos Planes</span>
        <p class="description__home2">Pensando en grandes emprendedores</p>
    </div>   
     `;

    return wrapper;
}

const createPlans = ()=>{
    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper-planes-list';
    wrapper.classList = 'wrapper__plans';
    wrapper.innerHTML = `  
    <div class="planes">  
        <div class="content__plan plan1"><h4>Plan A</h4></div>
        <div class="content__plan plan2"><h4>Plan B</h4></div>
        <div class="content__plan plan3"><h4>Plan C</h4></div>
        <div class="content__plan plan4"><h4>Plan D</h4></div>
    </div>
   <div class="planes">
        <div class="content__plan plan1"><p>50.000 mensual</p></div>
        <div class="content__plan plan2"><p>50.000 mensual</p></div>
        <div class="content__plan plan3"><p>50.000 mensual</p></div>
        <div class="content__plan plan4"><p>50.000 mensual</p></div>
    </div>
    <br>
    <div class="content__btn__plan">
     <button class="btn__plan" id="btn-plan"><a href="#plan" class="nav__link"><span data-target="plan" class="txt__btn__plan">Comprar Ahora ></span></a></button>
    </div>
     `;

    return wrapper;
}

const createDescriptions = ()=>{
    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper-imgs-form';
    wrapper.classList = 'wrapper__caracteristics';
    wrapper.innerHTML = `        
    <div class="caracteristics">
        <div class="content__caracteristics">
            <span>Modulos</span>
            <span class="txt__caracteristics">Siempre pensando en el tiempo que inviertes en tu negocio y en tu familia</span>
        </div>
   </div>
   <div class="caracteristics">
        <div class="content__caracteristics">
            <span>Beneficios</span>
            <span class="txt__caracteristics">Esto te permitira hacelo sencillo hasta tus hijos podran ayudarte en tu negocio</span>
        </div>
   </div>
   <div class="caracteristics">
        <div class="content__caracteristics">
            <span>Disponible en Android y Ios</span>
            <span class="txt__caracteristics">Te imaginas tener todo a la palma de tu mano</span>
        </div>
   </div>
   <div class="caracteristics">
        <div class="content__caracteristics">
            <span>¡Puedes usarlo ya!</span>
            <span class="txt__caracteristics">deja tu cuaderno, deja de llevar calculos en tu mente, deja que el software haga esto por ti</span>
        </div>
    </div>
    <div class="caracteristics">
        <div class="content__caracteristics">
            <span>Soporte constante y personal</span>
            <span class="txt__caracteristics">Este programa te permitira adaptarlo a tu propia empresa</span>
        </div>
    </div>
    <div class="caracteristics">
        <div class="content__caracteristics">
            <span>Haga sus cuadres de caja diarios</span>
            <span class="txt__caracteristics">al estar en la nube debes estar seguro que tu informacion estara siempre disponible desde cualquier lugar del mundo</span>
        </div>
    </div>         
     `;

    return wrapper;
}

const createImgsFooter = ()=>{
    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper-imgs-end';
    wrapper.classList = 'wrapper__imgs__end';
    wrapper.innerHTML = ` 
    <br>   
    <div class="center">
        <span class="description__home">En que clase de negocios somos utiles</span>
    </div>
    <div class="plan__list" >
        <img src="./assets/1.jpg" class="planes_img">
        <img src="./assets/1.jpg" class="planes_img">
        <img src="./assets/1.jpg" class="planes_img">
    </div>
    <div class="plan__list" >
        <img src="./assets/1.jpg" class="planes_img">
        <img src="./assets/1.jpg" class="planes_img">
        <img src="./assets/1.jpg" class="planes_img">
    </div>
    <div class="center">
        <br>
        <span class="description__home2">Restauranes- Parquaderos- Consultorios odontologicos Panadereas Pastelerias Bares Emprendedores Pymes</span>
        <br>
        <span class="description__home2">Preguntanos y te daremos asesoria personalizada y completamente gratis </span>
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

export{createPlanes};