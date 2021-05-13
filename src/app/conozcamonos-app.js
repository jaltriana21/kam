const createConozcamonos = ()=>{
    const wrapper = document.getElementById('wrapper-conozcamonos');   
    wrapper.appendChild(createImgHeader());  
    wrapper.appendChild(createInfo()); 
    wrapper.appendChild(createForm()); 
 
    return wrapper;
}


const createImgHeader = ()=>{
    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper-planes__img';
    wrapper.classList = 'wrapper__planes__img';
    wrapper.innerHTML = `    
    <div>    
        <img class="plans__img__one" src="./assets/0.png" >  
    </div>   
    <div>     
        <span class="description__home">Confia en Nosotros,</span>
        <p class="description__home2">Kam es un software hecho a la medida de grandes emprededores</p>
    </div>   
     `;

    return wrapper;
}

const createInfo = ()=>{
    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper-caracteristics';
    wrapper.classList = 'wrapper__caracteristics';
    wrapper.innerHTML = `
        <div class="caracteristics">
            <i class='bx bxs-mobile'></i>
                <div class="content__caracteristics">
                    <span>Misión</span>
                    <span class="txt__caracteristics">Brindar herramientas administrativas que sean utiles para todos los emprendedores con sistemas solidos, simples, rapidos y minimalistas </span>
                </div>
        </div>

        <div class="caracteristics">
            <i class='bx bxs-mobile'></i>
                <div class="content__caracteristics">
                    <span>Visión</span>
                    <span class="txt__caracteristics">Esperamos estar brindando nuestro servicio a mas de 400 emprendedores satisfechos para el años 2023</span>
                </div>
        </div>

        <div class="caracteristics">
            <i class='bx bxs-mobile'></i>
                <div class="content__caracteristics">
                    <span>Quienes Somos</span>
                    <span class="txt__caracteristics">Somos un emprendimiento, un grupo de amigos que unimos fuerzas para ayudar a emprender a otros. nuestra razon social es JULUMA</span>
                </div>
        </div>

        <div class="caracteristics">
            <i class='bx bxs-mobile'></i>
                <div class="content__caracteristics">
                    <span>Ubicación</span>
                    <span class="txt__caracteristics">Somos de Pereira Colombia y si bien somos del eje cafetero pretendemos llegar a muchos paises</span>
                </div>
        </div>

        <div class="caracteristics">
            <i class='bx bxs-mobile'></i>
                <div class="content__caracteristics">
                    <span>Origen</span>
                    <span class="txt__caracteristics">Creamos la empresa en el mes de Abril del 2021, creyendo que ante los problemas del Covid podemos ser un solucion para los emprendedores</span>
                </div>
        </div>
        `;
    return wrapper;
}


const createForm = ()=>{

    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper-form__contact';
    wrapper.classList = 'wrapper__form__contact';
    wrapper.innerHTML = `    
    <div>    
        <span class="description__home">Contactanos</span> 
    </div>   
    <div>     
        <form >
            <input class="input_contact" type="text" id="nombre" required placeholder="Nombre"><br>
            <input class="input_contact" type="email" id="email" required placeholder="Correo"><br>
            <input class="input_contact" type="tel" id="celular" placeholder="Celular"><br>
            <textarea class="textarea_contact" id="mensaje" > Escribe tu mensaje...</textarea><br>
            <button class="btn_contact" type="sumbit">Enviar</button>
        </form>
    </div>
    <div>
    <br>
        <span class="txt__contact"> E-mail: <a href="#contacto" class="nav__link txt__contact">contabilidad.JULIMA@gmail.com</a></span> <br>
        <span class="txt__contact"> Celular y Whatsapp +(57) 311-716-6194 </span>
    </div>   
     `;

    return wrapper;
}



export{createConozcamonos};