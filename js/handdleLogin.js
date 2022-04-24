function handleLogin () {
    
    let user = document.getElementById("usuario").value;
    let pass = document.getElementById("contrasena").value;

    

    const users = JSON.parse(localStorage.getItem("usuarios"))
    

    users.forEach (element => {
        
        //console.log(typeof(element.pass))
        //console.log(typeof(pass))

        

        if (element.name === user && element.pass == pass) {
            /* logstat.innerHTML = "Usuario logueado correctamente"
            logstat.style.color = "green" */
            loginOK()
            window.location.href = "../backProductos.html";    
        } else {
            /* logstatus.innerHTML = "Datos incorrectos"
            logstat.style.color = "red" */
            loginError();
        }
    })
}

const loginError = () => {
    Swal.fire({
        icon: 'error',
        title: 'Datos Incorrectos',
        text: 'Vuelva a intentarlo',        
      })
}


const loginOK = () => {
    Swal.fire({
        icon: 'success',
        title: 'Login Correcto',
        text: 'Acceso a sistema concedido',        
      })
}
