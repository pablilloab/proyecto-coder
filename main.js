class Articulo {
    nombre = '';
    codigo = 0;
    descripcion = '';
    precio = 0;
    imagen = '';
    
    

    
    constructor (nombre, codigo, descripcion, precio, imagen) {
        this.nombre = nombre;
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.precio = precio;
        this.imagen = imagen;
    }
    
}

const productosParaVender = []

function buscarArticulo (codigo) {
    for (const producto of productosParaVender) {
        if (producto.codigo === codigo) {
            return productosParaVender.indexOf(producto);
        }        
    }
    return -1;
}

function listarArticulos () {
    for (const producto of productosParaVender) {
        console.log(producto);
    }
}



function cargarArticulo (nombre, codigo, descripcion, precio, imagen) {
    if (buscarArticulo(codigo) === -1) {
        productosParaVender.push(new Articulo(nombre,codigo,descripcion,precio,imagen));  
        return true;        
    }else{
        alert("El articulo ya se encuentra en la base de datos");
        return false;
    }    
}


function borrarArticulo (codigo) {    
    
    if (productosParaVender.length === 0) {
        alert("No existen productos en la base de datos")
    }else{
        let indice = buscarArticulo(codigo);
        if (indice !== -1) {
            productosParaVender.splice(indice,1)
            alert ("El articulo ha sido borrado correctamente");
        }else{
            alert("El articulo no puede ser borrado");
        }        
    }   
}


function actualizarArticulo () {
    let codigoArticulo = parseInt(prompt("Ingrese el codigo del articulo a actualizar"));
    
    if (productosParaVender.length === 0) {
        alert ("No existen productos para actualizar");
    }else{
        let indice = buscarArticulo(codigoArticulo);
        if (indice !== -1) {
            let campoActualizar = prompt("Ingrese el campo a actualizar (nombre,descripcion,precio)");
            let nuevoValor = prompt("Ingrese el nuevo Valor");
            productosParaVender[indice][campoActualizar] = nuevoValor;
            alert("Articulo actualizado correctamente");
        }else{
            alert("El articulo no fue encontrado");
        }   
    }
}



