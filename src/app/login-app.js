import formHeader from '../html/login/form-header.html';
import loginImgs from '../html/login/login-imgs.html'

const createLogin = ()=>{
    const wrapper = document.getElementById('wrapper-login');   
    wrapper.appendChild(createLoginElements());      
    return wrapper;
};

const createLoginElements = () =>{
    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper-login__form';
    wrapper.classList = 'wrapper__login__form';       
    wrapper.appendChild(createDivForm());
    wrapper.appendChild(createImgs());   
    return wrapper;
};

const createDivForm = ()=>{
    const divForm = document.createElement('div');
    divForm.classList = 'center';
    divForm.innerHTML = formHeader;

    divForm.appendChild(createForm());

    return divForm;

};

const createForm = () =>{
    const form = document.createElement('form');
    form.appendChild(inputEmail());
    form.appendChild(inputPassword());
    form.appendChild(document.createElement('br'));
    form.appendChild(btnLogin());

    return form;
    
}

const inputEmail = () =>{
    const input = document.createElement('input');
    input.type = 'email';
    input.id = 'email_login';
    input.placeholder ='Correo';
    input.classList = 'input_login';
    input.required = true;

    return input;
}

const inputPassword = () =>{
    const input = document.createElement('input');
    input.type = 'password';
    input.id = 'password_login';
    input.placeholder ='Contraseña';
    input.classList = 'input_login';
    input.required = true;

    return input;
}

const btnLogin = () =>{
    const btn = document.createElement('button');
    btn.type = 'submit';
    btn.classList = 'btn_login';
    btn.innerText = 'Ingresar';

    return btn;
}

const createImgs = ()=>{
    const wrapper = document.createElement('div');
    wrapper.id= 'wrapper_login_img';
    wrapper.classList = 'wrapper_login_imgs';
    wrapper.innerHTML = loginImgs;

    return wrapper;
};



export{createLogin};