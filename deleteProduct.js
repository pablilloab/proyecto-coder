let deleteProduct = document.getElementById("product-wrapper");

deleteProduct.addEventListener("click", (event) => {
    let codigo = event.target.querySelector("p").innerText;
    borrarArticulo(codigo);
})