const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{5,16}$/,
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    correo: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/,
    password: /^.{4,20}$/,
    telefono: /^\d{10}$/,
}

// creo un objeto con cada uno de los campos
const campos = {
    usuario: false,
    nombre: false,
    password: false,
    corrreo: false,
    telefono: false
}

const valido = (expresion, input, campo) => {
    if (expresion.test(input.value)){
        document.getElementById(`grupo_${campo}`).classList.remove('form_grupo-incorrecto');
        document.getElementById(`grupo_${campo}`).classList.add('form_grupo-correcto');
        document.querySelector(`#grupo_${campo} i`).classList.add('bi-check-square-fill');
        document.querySelector(`#grupo_${campo} i`).classList.remove('bi-x-square-fill');
        document.querySelector(`#grupo_${campo} .form_input-error`).classList.remove('form_input-error-activo');
        campos[campo] = true;
    } else{
        document.getElementById(`grupo_${campo}`).classList.add('form_grupo-incorrecto');
        document.getElementById(`grupo_${campo}`).classList.remove('form_grupo-correcto');
        document.querySelector(`#grupo_${campo} i`).classList.add('bi-x-square-fill');
        document.querySelector(`#grupo_${campo} i`).classList.remove('bi-check-square-fill');
        document.querySelector(`#grupo_${campo} .form_input-error`).classList.add('form_input-error-activo');
        campos[campo] = false;
    }  
}

const validarForm = (e) => {
    switch(e.target.name){
      case "usuario":
        valido(expresiones.usuario, e.target, e.target.name);
      break;
      case "nombre":
        valido(expresiones.nombre, e.target, e.target.name);
      break;
      case "password":
        valido(expresiones.password, e.target, e.target.name);
      break;
      case "password2":
        validps2();
      break;
      case "correo":
        valido(expresiones.correo, e.target, e.target.name);
      break;
      case "telefono":
        valido(expresiones.telefono, e.target, e.target.name);
      break

    }
}

const validps2 = () => {
    const inputPassword1 = document.getElementById('password');
    const inputPassword2 = document.getElementById('password2');

    if(inputPassword1.value !== inputPassword2.value){
        document.getElementById(`grupo_password2`).classList.add('form_grupo-incorrecto');
        document.getElementById(`grupo_password2`).classList.remove('form_grupo-correcto');
        document.querySelector(`#grupo_password2 i`).classList.add('bi-x-square-fill');
        document.querySelector(`#grupo_password2 i`).classList.remove('bi-check-square-fill');
        document.querySelector(`#grupo_password2 .form_input-error`).classList.add('form_input-error-activo');
        campos['password']= false;
    } else {
        document.getElementById(`grupo_password2`).classList.remove('form_grupo-incorrecto');
        document.getElementById(`grupo_password2`).classList.add('form_grupo-correcto');
        document.querySelector(`#grupo_password2 i`).classList.add('bi-check-square-fill');
        document.querySelector(`#grupo_password2 i`).classList.remove('bi-x-square-fill');
        document.querySelector(`#grupo_password2 .form_input-error`).classList.remove('form_input-error-activo');
        campos['password']=true;
    }
}

inputs.forEach( (input) => {
    input.addEventListener('keyup', validarForm);
    input.addEventListener('blur', validarForm);   
})

//al enviar vuelvan los campos blancos y se valida los campos para desaparecer
formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const terminos = document.getElementById('terminos');

    if(campos.usuario && campos.nombre && campos.password && campos.correo && campos.telefono && terminos.checked){
        formulario.reset();

        document.getElementById('form_mensaje-exito').classList.add('form_mensaje-exito-activo');
        setTimeout(() => {
            document.getElementById('form_mensaje-exito').classList.remove('form_mensaje-exito-activo');
        }, 2000);

        document.querySelectorAll('form_grupo-correcto').forEach( (icono) => {
            icono.classList.remove('form_grupo-correcto');
        })
    } else {
        document.getElementById('form_mensaje').classList.add('form_mensaje-activo');
        setTimeout(() => {
            document.getElementById('form_mensaje').classList.remove('form_mensaje-activo');
        }, 2000);
    }
})

