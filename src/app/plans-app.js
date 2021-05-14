import plansHeader from '../html/plans/plans-header.html';
import plansList from '../html/plans/plans-list.html';
import plansDescription from '../html/plans/plans-descriptions.html';
import planFooter from '../html/plans/plans-footer.html';

const createPlanes = ()=>{
    const wrapper = document.getElementById('wrapper-plan');   
    wrapper.appendChild(createImgHeader());  
    wrapper.appendChild(createPlans()); 
    wrapper.appendChild(createDescriptions()); 
    wrapper.appendChild(createImgsFooter()); 
    return wrapper;
};

const createImgHeader = () => {
    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper-planes__img';
    wrapper.classList = 'wrapper__planes__img';
    wrapper.innerHTML = plansHeader;

    return wrapper;
};

const createPlans = () => {
    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper-planes-list';
    wrapper.classList = 'wrapper__plans';
    wrapper.innerHTML = plansList;

    return wrapper;
};

const createDescriptions = () => {
    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper-imgs-form';
    wrapper.classList = 'wrapper__caracteristics';
    wrapper.innerHTML = plansDescription;

    return wrapper;
};

const createImgsFooter = () => {
    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper-imgs-end';
    wrapper.classList = 'wrapper__imgs__end';
    wrapper.innerHTML = planFooter;

    return wrapper;
};


export{createPlanes};