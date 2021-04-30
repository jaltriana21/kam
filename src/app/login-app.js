const createLogin = ()=>{
    const wrapper = document.getElementById('wrapper-login');   
    wrapper.appendChild(createForm());  
    //wrapper.appendChild(createImgs()); 
    const sectionNav = Array.from(document.querySelectorAll('[data-target]'));
    sectionNav.map((element)=>{element.addEventListener('click', setSection)});
    return wrapper;
}

const createForm = () =>{
    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper-login__form';
    wrapper.classList = 'wrapper__login__form';
    wrapper.innerHTML = `        
    <div class="login_continer"> 
        <div class="center">         
        <img class="login_img_one" src="./assets/0.png">
        <br>
        <span class="description__home">Bienvenido</span>
        <p class="description__home2">¿En que podemos servirte hoy?</p>
    
       
        <form >
            <input class="input_login" type="email" id="email" required placeholder="Correo"><br>
            <input class="input_login" type="password" id="password" required placeholder="Contraseña"><br>
            <button class="btn_login" type="sumbit">Ingresar</button>
        </form>
        </div>
        <div>
            <img class="login_img_one" src="./assets/1.jpg">
            <img class="login_img_one" src="./assets/1.jpg">
            <div>
                <img class="login_img_one" src="./assets/1.jpg">                            
            </div> 
        </div>        
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