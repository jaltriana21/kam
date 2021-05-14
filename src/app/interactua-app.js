import headerInteractua from '../html/interactua/header-interactua.html';
import galeryInteractua from '../html/interactua/galery-interactua.html';
import tutorialsInteractua from '../html/interactua/tutorials-interactua.html';
import preguntsInteractua from '../html/interactua/pregunts-interactua.html';


const createInteract = () => {
    const wrapper = document.getElementById('wrapper-interactua');
    wrapper.appendChild(createImgHeader());
    wrapper.appendChild(createGalery());
    wrapper.appendChild(createTutorials());
    wrapper.appendChild(createPregunts());
    addEventsInteract();
    return wrapper;
};

const addEventsInteract = () => {
    listPregunts();
};


const createImgHeader = () => {
    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper-img-home';
    wrapper.classList = 'wrapper__img__home';
    wrapper.innerHTML = headerInteractua;
    return wrapper;
};


const createGalery = () => {
    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper-galery';
    wrapper.classList = 'wrapper__galery';
    wrapper.appendChild(contentSentInteractua());
    wrapper.appendChild(contentGalery());
    return wrapper;
};


const contentGalery = () => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = galeryInteractua;
    return wrapper;
};


const contentSentInteractua = () => {
    const wrapper = document.createElement('div');
    wrapper.classList = 'content__btn__interactua';
    wrapper.appendChild(sentInteractua());
    return wrapper;
};


const sentInteractua = () => {
    const el = document.createElement('button');
    el.classList = 'btn__interactua';
    el.id = 'btn-interactua';
    el.appendChild(sentTxtInteractua());
    el.addEventListener('click', setSection);
    return el;
};    


const sentTxtInteractua = () => {
    const el = document.createElement('a');
    el.classList = 'link__interactua';
    el.innerHTML = '<span data-target="count" class="txt__btn__interactua">Crear cuenta ></span>'
    return el;
};


const createTutorials = () => {
    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper-tutoriales';
    wrapper.classList = 'wrapper__tutoriales';
    wrapper.innerHTML = tutorialsInteractua;
    wrapper.appendChild(contentSentTutorials());
    return wrapper;
};


const contentSentTutorials = () => {
    const wrapper = document.createElement('div');
    wrapper.classList = 'content__btn__interactua';
    wrapper.appendChild(sentTutorials());
    return wrapper;
};


const sentTutorials = () => {
    const el = document.createElement('button');
    el.classList = 'btn__interactua';
    el.id = 'btn-interactua';
    el.appendChild(sentTxtTutorials());
    el.addEventListener('click', setSection);
    return el;
};    


const sentTxtTutorials = () => {
    const el = document.createElement('a');
    el.classList = 'link__interactua';
    el.innerHTML = '<span data-target="plan" class="txt__btn__interactua">Ver precios ></span>';
    return el;
};


const createPregunts = ()=>{
    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper-preguntas';
    wrapper.classList = 'wrapper__preguntas';
    wrapper.innerHTML = preguntsInteractua;
    return wrapper;
};


const listPregunts = ()=>{
    const pregunts =  document.getElementsByClassName('content__pregunta');
    const content = [].slice.call(pregunts);
    content.map((pregunt)=>{
        pregunt.addEventListener("click",(e)=>{
            e.currentTarget.classList.toggle("activa");
            console.log(pregunt);
            const response = pregunt.querySelector(".txt__respuesta");
            const heightResponse = response.scrollHeight;
            if(!response.style.maxHeight){
                response.style.maxHeight = heightResponse + 'px';
            }else{
                response.style.maxHeight = null;
            };
            content.map((element)=>{
                if(pregunt !== element){
                    element.classList.remove("activa");
                    element.querySelector(".txt__respuesta").style.maxHeight = null;
                };
            });
        });
    });
};


const setSection = (ev) => {
    const wrapper = document.getElementsByClassName('wrapper__nav');
    const content = [].slice.call(wrapper);
    content.map((element)=>{element.classList.remove('activo')});
    const id = ev.target.dataset.target;
    const selectSection = document.getElementById(`wrapper-${id}`);
    selectSection.classList.add('activo');
};




export{createInteract};