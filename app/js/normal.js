
    token = localStorage.getItem("token")
    console.log(token)
    
    function parseJwt (token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        let json = JSON.parse(jsonPayload)
        console.log(JSON.parse(jsonPayload))
        id=json.identity
        console.log(id)
    };
    parseJwt(token)
    
    let obtenerEstudiante = async (id) => {
        let url = `http://127.0.0.1:5000/cuenta/${id}`;
        let reponse = await fetch(url);
        let objJson = await reponse.json();
        return objJson;
    }

    
    let tabla_body =  document.getElementById("tbody")


    let listar = () =>{
        obtenerEstudiante(id).then(r=>{
            console.log(r)

            r.forEach(cuenta => {
            let tr = document.createElement("tr")
            tr.innerHTML= `<td>${cuenta.numero}</td><td>${cuenta.cue_saldo}</td><td>${cuenta.moneda}</td><td><button onclick="ir(${cuenta.id},${cuenta.numero})">Ir</button></td>` 
            tabla_body.appendChild(tr)   
            });

        })
    }

    listar()

    let ir = (id,numero_cuenta) =>{
        console.log(id)
        localStorage.setItem("idcuenta",id)
        localStorage.setItem("numero_cuenta",numero_cuenta)
        location.href="./menu.html"
    }