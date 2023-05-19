function compras(){
    console.log("hice clic e boton compras")
    document.getElementById("carouselAuto").style.display="none"
    document.getElementById("destacadosVinos").style.display="none"
    displaycompras(vinos)
}
let cantidadProducto=0
let inputSoloLect=[]
function displaycompras(vinos){
    var htmlcompras = "";
    for (var i = 0; i < vinos.length; i++) {
        htmlcompras += `
        <div class="col">
        <div class="card card-compra">
          <div class="img-card-compra"><img src="${vinos[i].image}" alt="imagen ${vinos[i].nombre}"></div>
          <div class="card-body body-compra">
            <p class="card-title">${vinos[i].nombre}</p>
            <p class="card-text"><small class="text-body-secondary">tipo: ${vinos[i].tipo}</small></p>
            <p class="card-text"><small class="text-body-secondary">Precio: $ ${vinos[i].precio}</small></p>
          </div>
          <div class="footer-compra">
            <div class="parteuno"> 
              <label for="cantidad" class="form-label">Cantidad</label>
              <input type="number" class="form-control introCar" id="cantidad${vinos[i].id}" placeholder="Cantidad">
            </div>
            <div class="input-group ">
              <span class="input-group-text">Total a Pagar $</span>
              <input type="number" readonly class="form-control col-7 inputcompra" id="totalInput${vinos[i].id}">
            </div>
          </div>
        </div>
      </div>
        `}
       
document.getElementById("compras").innerHTML=htmlcompras
var Cantidad=document.querySelectorAll(".introCar")


inputSoloLect=document.querySelectorAll(".inputcompra")
console.log(inputSoloLect)

for (var i = 0; i < Cantidad.length; i++) {
  Cantidad[i].addEventListener("change", function (e) {
   
   cantidadProducto=e.target.value
   calculadora(e.target.id)
  })
}}
var totalItem=0

function calculadora(id){
   console.log("cantidad",cantidadProducto)
  var idSel = id.split("cantidad").filter(Number)
  // console.log(idSel)
  var idSelected=idSel[0]
  console.log("id",idSelected)

  for(var i=0; i<vinos.length;i++){
    if(vinos[i].id==idSelected){
      totalItem=vinos[i].precio*cantidadProducto
    }

  }
  console.log("totalItem",totalItem)
  var read="totalInput"
  var newread=read+idSelected
  console.log(newread)

  var inputTotal = document.getElementById(newread);
inputTotal.value = totalItem;


}





// var elemento=inputSoloLect[i].id
//   var idItem=elemento.split("totalInput")
//   console.log(idItem[1])
// for(var i=0; i<inputSoloLect.length;i++){
  
//   if(idItem[1]=idSel[1]){
//     console.log("coinciden los id")
//   }
// }

