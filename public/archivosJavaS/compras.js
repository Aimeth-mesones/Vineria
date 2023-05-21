let totalGeneral = 0
let carrito = []
function compras() {
  console.log("hice clic e boton compras"),
  document.getElementById("carouselAuto").style.display = "none",
  document.getElementById("destacadosVinos").style.display = "none",
  document.getElementById("seccionCompras").style.display = "flex",
    document.getElementById("tarjetas").style.display = "none",
    document.getElementById("vinosSeccion").innerHTML = "Calculadora de Pedidos",
    displaycompras(vinos)
}
let cantidadProducto = 0
let inputSoloLect = []
function displaycompras(vinos) {
  var htmlcompras = "";
  for (var i = 0; i < vinos.length; i++) {
    htmlcompras += `
        <div class="col col-compras">
           <div class="card card-compra">
              <div class="img-card-compra"><img src="${vinos[i].image}" alt="imagen ${vinos[i].nombre}"></div>
              <div class="card-body body-compras">
                <p class="card-title">${vinos[i].nombre}</p>
                <p class="card-text"><small class="text-body-secondary">Tipo: ${vinos[i].tipo}</small></p>
                <div class="parteuno">
                  <p class="card-text">Precio:${vinos[i].precio} </p>
                  <label for="cantidad" class="form-label" style="display:none;">Cantidad</label>
                  <input type="number" class="form-control introCar" id="cantidad${vinos[i].id}" placeholder="Cantidad">
                </div>
              </div>
          
              <div class="footer-compras input-group">
                <span class="input-group-text">Total Item: $</span>
                <input type="number" readonly class="form-control col-7 inputcompra" id="totalInput${vinos[i].id}">
              </div>
          
            </div>
        </div>
        `}

  document.getElementById("compras").innerHTML = htmlcompras
  var Cantidad = document.querySelectorAll(".introCar")


  inputSoloLect = document.querySelectorAll(".inputcompra")
  console.log(inputSoloLect)

  for (var i = 0; i < Cantidad.length; i++) {
    Cantidad[i].addEventListener("change", function (e) {

      cantidadProducto = e.target.value
      calculadora(e.target.id)
      calculoGeneral()
      // displayCarrito()
     
     
      
    })
  }
}
var totalItem = 0

function calculadora(id) {
  console.log("cantidad", cantidadProducto)
  var idSel = id.split("cantidad").filter(Number)
  // console.log(idSel)
  var idSelected = idSel[0]
  console.log("id", idSelected)
  
  for (var i = 0; i < vinos.length; i++) {
    if (vinos[i].id == idSelected) {
      totalItem = vinos[i].precio * cantidadProducto
      vinos[i].cantidad = cantidadProducto
      if (!carrito.some(item => item.id === vinos[i].id)) {
        carrito.push(vinos[i]);
      }
    }
      
    }

  
  console.log("totalItem", totalItem)
  console.log(carrito)

  var read = "totalInput"
  var newread = read + idSelected
  console.log(newread)

  var inputTotal = document.getElementById(newread);
  inputTotal.value = totalItem;
  
displayCarrito()
}

function calculoGeneral() {
  totalGeneral = 0; // Reiniciamos el valor a 0 antes de recalcular

  for (var i = 0; i < vinos.length; i++) {
    var totalInput = document.getElementById(`totalInput${vinos[i].id}`);
    var total = parseInt(totalInput.value);

    if (total > 0) {
      totalGeneral += total;
    }
  }
  console.log("total compra")
  console.log(totalGeneral)
 var elemento= document.getElementById("final")
 console.log(elemento)
 elemento.innerHTML=`<p>Total Pedido: $${totalGeneral}`
}


function displayCarrito() {
  console.log(carrito)
  // let listaCarro = carrito.map(item => item.id)

  // let listaCarroUnica = new Set(listaCarro)

  // let carritoCompras = [...listaCarroUnica]
  // console.log(carritoCompras)
  var htmlCarrito = "";
  // for (var i = 0; i < carritoCompras.length; i++) {
    for (var b = 0; b < carrito.length; b++) {
      // if (carrito[b].id == carritoCompras[i]) {
        htmlCarrito += `
        <div class="carrito-item">
        <div class="cont-carritoImage">
          <img src="${carrito[b].image}" alt="${carrito[b].nombre}">
        </div>
        <div class="carrito-item-detalles">
          <span class="carrito-item-titulo">${carrito[b].nombre}</span>
          <p>Cantidad: ${carrito[b].cantidad} - Precio: $${carrito[b].precio}</p>
          <p>Total: $${carrito[b].precio * carrito[b].cantidad}</p>
        </div>
      </div>
          `
      }
      document.getElementById("tuPedido").innerHTML = htmlCarrito;
      
     
    }

