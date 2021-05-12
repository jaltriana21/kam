const createLogin = () => {
    const wrapper = document.getElementById('wrapper-login');   
    wrapper.appendChild(createLoginElements());      
    const sectionNav = Array.from(document.querySelectorAll('[data-target]'));
    sectionNav.map((element)=>{element.addEventListener('click', setSection)});
    return wrapper;
}

const createLoginElements = () =>{
    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper-login__form';
    wrapper.classList = 'wrapper__login__form';       
    wrapper.appendChild(createDivForm());
    wrapper.appendChild(createImgs());   
    return wrapper;
}

const createDivForm = () => {
    const divForm = document.createElement('div');
    divForm.classList = 'center';
    divForm.innerHTML =  
    `<img class="login_img_one" src="./assets/0.png">
    <br />
    <span class="description__home">Bienvenido</span>
    <p class="description__home2">¿En que podemos servirte hoy?</p>        
    `;

    divForm.appendChild(createForm());

    return divForm;

}

const createForm = () =>{
    const form = document.createElement('form');
    form.appendChild(inputEmail());
    form.appendChild(inputPassword());
    form.appendChild(document.createElement('br'));
    form.appendChild(btnLogin());

    return form;
};

const inputEmail = () =>{
    const input = document.createElement('input');
    input.type = 'email';
    input.id = 'email';
    input.placeholder ='Correo';
    input.classList = 'input_login';
    input.required = true;

    return input;
}

const inputPassword = () =>{
    const input = document.createElement('input');
    input.type = 'password';
    input.id = 'password';
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
    wrapper.innerHTML = `
    <img class="login_img_one" src="./assets/1.jpg">
            <img class="login_img_one" src="./assets/1.jpg">
            <div>
                <img class="login_img_one" src="./assets/1.jpg">                            
            </div> 
    `;
    return wrapper;
}

const setSection = (ev)=>{
    const content = Array.from(document.querySelectorAll('[data-content]'));
    content.map((element)=>{element.classList.remove('activo')});
    const id = ev.target.dataset.target;
    const selectSection = document.getElementById(`wrapper-${id}`);
    selectSection.classList.add('activo');
};

export{createLogin};