import { getEmpleatos } from "./API.js";
const user = document.querySelector('#name');
const password = document.querySelector('#contraseña');
const boton = document.querySelector('#btnIniciar')

user.addEventListener('input', contUser);
password.addEventListener('input', contPassword);
boton.addEventListener('click', EnviarInf)

let usuario = "";
let contraseña = "";

function contUser(e) {
   usuario = e.target.value;
}
function contPassword(e) {
   contraseña = e.target.value;
}

async function EnviarInf() {
   const usuarios = await getEmpleatos(); // pasando a la const el array que posee getEmpleados
   usuarios.forEach(element => {
      if(usuario && contraseña){
         if (usuario === element.user && contraseña === element.password) {
            alert('FUNCIONÓ :)')
         } else if (usuario === element.user && contraseña != element.password) {
            alert('CONTRASEÑA INCORRECTA. INTENTE DE NUEVO')
         } else if (usuario != element.user && contraseña === element.password) {
            alert('USUARIO INVÁLIDO..')
         } else {
            alert('USUARIO NO REGISTRADO')
         }
      } else {
            alert('TODOS LOS CAMPOS SON OBLIGATORIOS')
      }


   });
}

