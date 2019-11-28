let formRegistro = document.getElementById("formRegistro");
let btnRegistro = document.getElementById("btnRegistro")
let formLogin = document.getElementById("formLogin")

btnRegistro.onclick= ()=>{
    console.log('se hizo click');
    formRegistro.removeAttribute('hidden')
    btnRegistro.setAttribute('hidden','hidden')
    formLogin.setAttribute('hidden','hidden')
}