import { data } from '../data/productos.js';


//Renderizado de productos cargados en el archivo data.js
let cardWrapperStarWars = document.querySelector(".star");
let cardWrapperConsolas = document.querySelector(".consola");
let cardWrapperDiversos = document.querySelector(".diversos");

const showProducts = () => {
    data.starWars.length == 0 ? error() : listarProductos(cardWrapperStarWars,data.starWars);
    data.consolas.length == 0 ? error() : listarProductos(cardWrapperConsolas,data.consolas);
    data.diversos.length == 0 ? error() : listarProductos(cardWrapperDiversos,data.diversos);    
}

const listarProductos = (cardWrapper,array) => {
    let clase = cardWrapper.className;
    array.forEach((elemento) => { 

        let cardDiv = document.createElement("div");
        cardDiv.setAttribute("id","product-card");
        cardDiv.innerHTML = `
            <img src=${elemento.img} alt="">
            <p>${elemento.title}</p>
            <span>$${elemento.precio}</span>
            <button onclick="mostrarInfo(${elemento.id},event)" class="${clase}">Ver producto</button>
        `;
        cardWrapper.appendChild(cardDiv);
    })

}

window.onload = showProducts;


//Mostrar info de productos desde modal
window.mostrarInfo = (id, event) =>{
    //console.log(id,event.target.className)
    switch (event.target.className) {
        case "star":
            crearModal(data.starWars[id]);
            break;
        case "consola" :
            crearModal(data.consolas[id]);
            break;
        case "diversos":
            crearModal(data.diversos[id]);
            break;
    }
}

//Funcion para renderizar info
const crearModal = async (producto) => {

    //let descripcion = async () => await getDescription(producto.id);   

    
    let descripcion = await getDescription(producto.id);
    console.log(descripcion)
        
    

   
    let modalInfo = document.getElementById("product-info");
    let modalCard = document.createElement("div");
    modalInfo.innerHTML = "";
    modalCard.innerHTML = `
        <div>
            <img src="${producto.img}"></img>
        </div>
        <div>
            <h1>${producto.title}</h1>
            <h2>${producto.desc}</h2>
            <h3>El publico dice: ${descripcion}</h3>
            <h3>$ ${producto.precio}</h3>
            <button onclick="cerrarModal()">Cerrar</button>
        </div>
        
    `
    modalInfo.appendChild(modalCard);
    let modalWrapper = document.getElementById("modal");
    modalWrapper.style.display="block";
    modalInfo.style.transform = `translateY(${window.pageYOffset}px)`;
}

window.cerrarModal = () => {
    let modalWrapper = document.getElementById("modal");
    modalWrapper.style.display="none";
}

const error = () => {
    Swal.fire({
        icon: 'error',
        title: 'No existen productos para mostrar',
        text: 'Intente cargar algun articulo',        
      })
}

const getDescription = async (id) => {
    const resp = await fetch('../data/description.json')
    const data = await resp.json()

    console.log(data)
    
    let opinion = "";
    //cambiar a find
    data.forEach((element) =>{ 
        
       element.id == id ? opinion = element.opinion : opinion = false 
       
    })
    
    return opinion;
}


//axios
/* async function getCharacters () {
    let response = await axios ("dir del api");
    response = response.data.results;
}
       */