class Articulo {
    nombre = '';
    codigo = 0;
    descripcion = '';
    precio = 0;
    imagen = '';
    

    
    constructor (nombre, codigo, descripcion, precio) {
        this.nombre = nombre;
        this.codigo = parseInt(codigo);
        this.descripcion = descripcion;
        this.precio = parseFloat(precio);
    }
    
}

const productosParaVender = [
    {
        nombre:"Arroz",
        codigo:2222,
        descripcion:"Arroz Gallo Integral",
        precio:65.30,
        imagen:'../img/arroz.jpg'
    },
    {
        nombre:"Harina",
        codigo:1111,
        descripcion:"Harina 0000",
        precio:35,
        imagen:'../img/harina.jpg'
    }
]

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

listarArticulos();

function cargarArticulo () {
    let nombre = prompt("Ingrese el nombre del articulo");
    let codigo = parseInt(prompt("Ingrese el codigo del articulo"));
    let descripcion;
    let precio;
    let imagen;

    if (buscarArticulo(codigo) === -1) {
        descripcion = prompt("Ingrese una breve descripcion del articulo");
        precio = prompt("Ingrese el precio del articulo");
        imagen = prompt("Ingrese la ruta de la imagen del articulo (../assets/camisa.jpg)");
        productosParaVender.push(new Articulo(nombre,codigo,descripcion,precio,imagen));
        
    }else{
        alert("El articulo ya se encuentra en la base de datos")
    }    
}

cargarArticulo();


function borrarArticulo () {    
    let codigoArticulo = parseInt(prompt("Ingrese el codigo del articulo a borrar"));
    if (productosParaVender.length === 0) {
        alert("No existen productos en la base de datos")
    }else{
        let indice = buscarArticulo(codigoArticulo);
        if (indice !== -1) {
            productosParaVender.splice(indice,1)
            alert ("El articulo ha sido borrado correctamente");
        }else{
            alert("El articulo no puede ser borrado");
        }        
    }   
}


borrarArticulo();

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

actualizarArticulo();



