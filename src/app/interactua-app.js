const createInteractua = ()=>{
    const wrapper = document.getElementById('wrapper-interactua');
    wrapper.appendChild(createImgHeader());
    wrapper.appendChild(createGalery());
    wrapper.appendChild(createTutoriales());
    wrapper.appendChild(createPreguntas());
    listPreguntas();

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
        <span class="description__home">Experimenta gratis,</span>
        <p class="description__home2">hazlo durante cuatro dias.</p>
    </div>`
    return wrapper;
}


const createGalery = ()=>{
    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper-galery';
    wrapper.classList = 'wrapper__galery';
    wrapper.innerHTML = `
    <div class="content__btn__interactua">
    <div class="value__btn__interactua">
     <a href="#crear_cuenta" class="link__interactua"><button class="btn__interactua" id="btn-interactua" data-target="count"><span data-target="count" class="txt__btn__interactua">Crear cuenta ></span></button></a>
     </div>
    </div>
    <div class="galery">
    <div class="content__galery"><iframe class="galery__img" src="https://www.youtube.com/embed/K5Ym0KLZyOE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
    <div class="content__galery"><iframe class="galery__img" src="https://www.youtube.com/embed/K5Ym0KLZyOE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
    <div class="content__galery"><iframe class="galery__img1" src="https://www.youtube.com/embed/K5Ym0KLZyOE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><iframe class="galery__img2" src="https://www.youtube.com/embed/K5Ym0KLZyOE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
    </div>`;
    return wrapper;
}


const createTutoriales = ()=>{
    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper-tutoriales';
    wrapper.classList = 'wrapper__tutoriales';
    wrapper.innerHTML = `
    <div class="tutoriales">
    <div class="content__tutorial"><iframe class="galery__img__tuto" src="https://www.youtube.com/embed/K5Ym0KLZyOE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div class="txt__tutorial">
        <span>Creando terceros</span>
        <span>Creando Productos</span>
        <span>Creando Reportes</span>
        <span>Cuadres de caja</span>
        </div>
    </div>
    <div class="tutoriales">
    <div class="content__tutorial"><iframe class="galery__img__tuto" src="https://www.youtube.com/embed/K5Ym0KLZyOE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div class="txt__tutorial">
        <span>Creando terceros</span>
        <span>Creando Productos</span>
        <span>Creando Reportes</span>
        <span>Cuadres de caja</span>
        </div>
    </div>
    <div class="content__btn__interactua">
     <a href="#plan" class="link__interactua"><button class="btn__interactua" id="btn-interactua" data-target="plan"><span data-target="plan" class="txt__btn__interactua">Ver precios ></span></button></a>
    </div>
    `;
    return wrapper;
}


const createPreguntas = ()=>{
    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper-preguntas';
    wrapper.classList = 'wrapper__preguntas';
    wrapper.innerHTML = `
        <span class="title__preguntas">Preguntas frecuentes</span>
        <div id="content-pregunta" class="content__pregunta">
            <div id="pregunta" class="pregunta">
                <span class="txt__pregunta">pregunta 1</span>
                <i class='bx bxs-chevron-down'></i>
            </div>   

            <div id="respuesta" class="respuesta">
                <p id="txt-respuesta" class="txt__respuesta">Lorem ipsum dolor sit amet consectetur.</p>
            </div>  
        </div>

        <div id="content-pregunta" class="content__pregunta">
            <div id="pregunta" class="pregunta">
                <span class="txt__pregunta">pregunta 2</span>
                <i class='bx bxs-chevron-down'></i>
            </div>
            
            <div id="respuesta" class="respuesta">
                <p id="txt-respuesta" class="txt__respuesta">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, sit necessitatibus? Quidem optio non similique ratione eligendi enim, consequatur maxime? Saepe cum itaque praesentium eos dolore rerum alias repellat assumenda?</p>
            </div>    
            
        </div>
    `;

    return wrapper;
}



const listPreguntas = ()=>{
    const preguntas = Array.from(document.querySelectorAll(".content__pregunta"));
    console.log(preguntas);
    preguntas.map((pregunta)=>{
        pregunta.addEventListener("click",(e)=>{
            e.currentTarget.classList.toggle("activa");
            const respuesta = pregunta.querySelector(".txt__respuesta");
            const alturaRespuesta = respuesta.scrollHeight;
            if(!respuesta.style.maxHeight){
                respuesta.style.maxHeight = alturaRespuesta + 'px';
            }else{
                respuesta.style.maxHeight = null;
            }
            preguntas.forEach((elemento)=>{
            if(pregunta !== elemento){
                elemento.classList.remove("activa");
                elemento.querySelector(".txt__respuesta").style.maxHeight = null;
            }
            });
        });
    });
}



const setSection = (ev)=>{
    const content = Array.from(document.querySelectorAll('[data-content]'));
    content.map((element)=>{element.classList.remove('activo')});
    const id = ev.target.dataset.target;
    const selectSection = document.getElementById(`wrapper-${id}`);
    selectSection.classList.add('activo');
};




export{createInteractua};