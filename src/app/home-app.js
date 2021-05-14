import headerHome from '../html/home/header-home.html';
import galeryHome from '../html/home/galery-home.html';
import plansHome from '../html/home/plans-home.html';
import caracteristicsHome from '../html/home/caracteristics-home.html';
import clientsHome from '../html/home/clients-home.html';

const createHome = ()=>{
    const wrapper = document.getElementById('wrapper-home');
    wrapper.appendChild(createImgHeader());
    wrapper.appendChild(createGalery());
    wrapper.appendChild(createPlans());
    wrapper.appendChild(createCaracteristics());
    wrapper.appendChild(createClients());
    return wrapper;
};


const createImgHeader = ()=>{
    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper-img-home';
    wrapper.classList = 'wrapper__img__home';
    wrapper.innerHTML = headerHome;
    return wrapper;
};


const createGalery = ()=>{
    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper-galery';
    wrapper.classList = 'wrapper__galery';
    wrapper.innerHTML = galeryHome;
    return wrapper;
};

const createPlans = ()=>{
    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper-plans';
    wrapper.classList = 'wrapper__plans';
    wrapper.innerHTML = plansHome;
    wrapper.appendChild(contentSentPlans());
    return wrapper;
};

const contentSentPlans = () => {
    const wrapper = document.createElement('div');
    wrapper.classList = 'content__btn__plan';
    wrapper.appendChild(sentPlans());
    return wrapper;
};


const sentPlans = () => {
    const el = document.createElement('button');
    el.classList = 'btn__plan';
    el.id = 'btn-plan';
    el.appendChild(sentTxtPlans());
    el.addEventListener('click', setSection);
    return el;
};    


const sentTxtPlans = () => {
    const el = document.createElement('a');
    el.classList = 'nav__link';
    el.innerHTML = '<span data-target="plan" class="txt__btn__plan">Ver precios ></span>'
    return el;
};


const createCaracteristics = ()=>{
    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper-caracteristics';
    wrapper.classList = 'wrapper__caracteristics';
    wrapper.innerHTML = caracteristicsHome;
    wrapper.appendChild(contentSentCaracteristics());
    return wrapper;
};


const contentSentCaracteristics = () => {
    const wrapper = document.createElement('div');
    wrapper.classList = 'caracteristics__btn';
    wrapper.appendChild(sentCaracteristics());
    return wrapper;
};


const sentCaracteristics = () => {
    const el = document.createElement('button');
    el.classList = 'btn__caracteristics';
    el.id = 'btn-caracteristics';
    el.appendChild(sentTxtCaracteristics());
    el.addEventListener('click', setSection);
    return el;
};    


const sentTxtCaracteristics = () => {
    const el = document.createElement('a');
    el.classList = 'nav__link';
    el.innerHTML = '<span data-target="conozcamonos" class="txt__btn__caracteristics">Contactanos ></span>'
    return el;
};


const createClients = ()=>{
    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper-clients';
    wrapper.classList = 'wrapper__clients';
    wrapper.innerHTML = clientsHome;
    return wrapper;
};


const setSection = (ev) => {
    const wrapper = document.getElementsByClassName('wrapper__nav');
    const content = [].slice.call(wrapper);
    content.map((element)=>{element.classList.remove('activo')});
    const id = ev.target.dataset.target;
    const selectSection = document.getElementById(`wrapper-${id}`);
    selectSection.classList.add('activo');
};

export{createHome};