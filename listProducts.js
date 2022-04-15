let btnList = document.getElementById("listar");
let productWrapper = document.getElementById("product-wrapper");


btnList.addEventListener("click", ()=>{
    productWrapper.innerHTML = "";
    
    productosParaVender.forEach((element) => {
        let productCard = document.createElement("div");
        productCard.innerHTML = `
            <img src="${element.imagen}" alt="">
            <h2>${element.nombre}</h2>
            <p>${element.codigo}</p>
            <h3>$ ${element.precio}</h3>
        `;
        productCard.classList.add("product-card");
        productWrapper.appendChild(productCard);
    })

})