import header from '../html/conozcamonos/header.html';
import information from '../html/conozcamonos/information.html';
import formContact from '../html/conozcamonos/form-contact.html';

const createConozcamonos = ()=>{
    const wrapper = document.getElementById('wrapper-conozcamonos');   
    wrapper.appendChild(createImgHeader());  
    wrapper.appendChild(createInfo()); 
    wrapper.appendChild(createForm()); 
 
    return wrapper;
};


const createImgHeader = ()=>{
    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper-planes__img';
    wrapper.classList = 'wrapper__planes__img';
    wrapper.innerHTML = header;

    return wrapper;
};

const createInfo = ()=>{
    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper-caracteristics';
    wrapper.classList = 'wrapper__caracteristics';
    wrapper.innerHTML = information;
    return wrapper;
};


const createForm = ()=>{

    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper-form__contact';
    wrapper.classList = 'wrapper__form__contact';
    wrapper.innerHTML = formContact;

    return wrapper;
};



export{createConozcamonos};