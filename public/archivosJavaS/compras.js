function compras(){
    console.log("hice clic e boton compras")
    document.getElementById("carouselAuto").style.display="none"
    document.getElementById("destacadosVinos").style.display="none"
    displaycompras(vinos)
}
function displaycompras(array){
    var htmlcompras = "";
    for (var i = 0; i < array.length; i++) {
        htmlcompras += `
        <div class="col">
        <div class="card card-compra">
          <div class="img-card-compra"><img src="${array[i].image}" alt="imagen ${array[i].nombre}"></div>
          <div class="card-body body-compra">
            <p class="card-title">${array[i].nombre}</p>
            <p class="card-text"><small class="text-body-secondary">tipo: ${array[i].tipo}</small></p>
            <p class="card-text"><small class="text-body-secondary">Precio: $ ${array[i].precio}</small></p>
          </div>
          <div class="footer-compra">
            <div class="parteuno"> 
              <label for="cantidad" class="form-label">Cantidad</label>
              <input type="number" class="form-control" id="cantidad" placeholder="Cantidad">
            </div>
            <div class="input-group ">
              <span class="input-group-text">Total a Pagar $</span>
              <input type="number" readonly class="form-control col-7" id="total">
            </div>
          </div>
        </div>
      </div>
        `}
       
document.getElementById("compras").innerHTML=htmlcompras
}