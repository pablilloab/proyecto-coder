let btnEnviar = document.getElementById("enviar");

btnEnviar.addEventListener("click", (event) => {
    event.preventDefault();
    let form = document.getElementById("data");
    let nombre = form.nombre.value;
    let codigo = form.codigo.value;
    let descripcion = form.descripcion.value;
    let precio = form.codigo.value;
    let imagen = form.imagen.value;

    
    
    cargarArticulo(nombre, codigo, descripcion, precio, imagen) ? alert("cargado correctamente") : alert("error!!")
    form.reset();
})

