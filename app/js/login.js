let formRegistro = document.getElementById("formRegistro");
let btnRegistro = document.getElementById("btnRegistro");
let formLogin = document.getElementById("formLogin");
let inputEmail = document.getElementById("inputEmail");
let inputPassword = document.getElementById("inputPassword");
let cargando =  document.getElementById("carga")
let iniciarsesion = document.getElementById("iniciarSesion")

let login = async () => {
  let objUsuario = {
    username: inputEmail.value,
    password: inputPassword.value
  };
  let url = `http://127.0.0.1:5000/usuario/login`;
  console.log(objUsuario)
  let reponse = await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(objUsuario)
  });
  let objJson = await reponse.json();
  return objJson;
};

let traerPersona = async (id) => { 
  let url = `http://127.0.0.1:5000/persona/${id}`;  
  let reponse = await fetch(url)
  let objJson = await reponse.json();
  console.log(objJson)
  return objJson;
};

function parseJwt (token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
  let json = JSON.parse(jsonPayload)
  id=json.identity
  console.log(id)
  traerPersona(id).then((data)=>{
    if (data.nombre) {
      console.log("persona")
    }else{
      console.log("agencia")
    }
    localStorage.setItem("nombre ",data.nombre+" "+data.apellido)
    console.log(data)
  })

};

iniciarsesion.onclick=()=>{
  cargando.style.display = "block"  
  login().then(data =>{              
    if(data.status_code){          
        cargando.style.display = "none"
    }else{
        console.log("bienvenido")
        cargando.style.display = "none"
        localStorage.setItem("token",data.access_token)       
        parseJwt(data.access_token) 
        
        //location.href="./normal.html"
      
    }}).catch(()=>{
    console.log("sadsa")
})
  
}




