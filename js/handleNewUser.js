let users = [];

let user  = {
    name:"",
    email:"",
    wsp:"",
    dni:"",
    pass:""
}

const mailformat =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

function handleNewUser () {
    event.preventDefault();   

    let name = document.newUser.name.value;
    let email = document.newUser.email.value;
    let wsp = document.newUser.wsp.value;
    let dni = document.newUser.dni.value;
    let pass = document.newUser.pass.value;

    let error = document.getElementById("newUserStatus");

    if (name.length < 3) {
        loginError("El nombre debe tener mas de 3 caracteres");
    } else if (!email.match(mailformat)) {
        loginError("El formato del email debe ser: algo@dominio.com");
    } else if (!wsp) {
        loginError("El Wsp debe ser un numero");
    } else if (!dni) {
        loginError("El dni debe ser un numero");
    } else if (pass.length < 8) {
        loginError("El password debe ser mayor a 8 caracteres");        
    } else {
        if (users.length === 0) {
            user.name = name;
            user.email = email;
            user.wsp = wsp;
            user.dni = dni;
            user.pass = pass;
            users.push(user);
            error.innerHTML = "Usuario Registrado Correctamente"
            error.style.color = "green";
            storeusers = JSON.stringify(users);
            localStorage.setItem("usuarios",storeusers);
        }else{
            users = JSON.parse(localStorage.getItem("usuarios"))
            user.name = name;
            user.email = email;
            user.wsp = wsp;
            user.dni = dni;
            user.pass = pass;
            users.push(user);
            /* error.innerHTML = "Usuario Registrado Correctamente"
            error.style.color = "green"; */
            storeusers = JSON.stringify(users);
            localStorage.setItem("usuarios",storeusers);   
            loginOk();         
        }
        
    }    
}

const loginError = (msj) => {
    Swal.fire({
        icon: 'error',
        title: `${msj}`,              
      })
}

const loginOk = () => {
    Swal.fire({
        icon: 'success',
        title: `Usuario creado correctamente`,              
      })
}