(function() {
 const user = document.querySelector('#user1');
 const password = document.querySelector('#recipient-name');
 const btn = document.querySelector('Submit');

 user.addEventListener('input', ContUser  );
 password.addEventListener('input', ContPassword);
 btn.addEventListener('click', EnviarRegistro);

let ReUser = "";
let RePass = "";

function ContUser(e) {
    usuario = e.target.value;
 }
 function ContPassword(e) {
    contraseña = e.target.value;
 }




































})(); // función que se ejecuta inmediatamente