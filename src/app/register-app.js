const createRegister = ()=>{
    const wrapper = document.getElementById('wrapper-count');   
    wrapper.appendChild(createRegisterElements());      
    return wrapper;
}

const createRegisterElements = () =>{
    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper-login__form';
    wrapper.classList = 'wrapper__login__form';
    wrapper.appendChild(createDivForm());
    wrapper.appendChild(createImgs());   
    return wrapper;
}

const createDivForm = ()=>{
    const divForm = document.createElement('div');
    divForm.classList = 'center';
    divForm.innerHTML =  `        
                
    <img class="login_img_one" src="./assets/0.png">
    <br>
    <span class="description__home">¡Crea tu cuenta Gratis!</span>
    <p class="description__home2">prueba todas las funciones gratis por 2 dias</p>     
        
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
    
}

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
    input.placeholder ='Crea tu clave';
    input.classList = 'input_login';
    input.required = true;

    return input;
}

const btnLogin = () =>{
    const btn = document.createElement('button');
    btn.type = 'submit';
    btn.classList = 'btn_login';
    btn.innerText = 'Crear Cuenta';

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


export{createRegister};