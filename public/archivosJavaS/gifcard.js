let datosGift = {}

function displayFormularioGift() {
    console.log("inicie la seccion gifcard")
    document.getElementById("giftcardForm").innerHTML =
        `
<form id="formGiftcard">
          <label for="nombre">Para</label>
          <input type="text" id="nombre" name="nombre" placeholder="Nombre de la persona que recibe">

          <label for="mail">Mail</label>
          <input type="text" id="mail" name="mail" placeholder="Correo Electronico donde recibiras el regalo">

          <select class="form-select" aria-label="Default select example">
            <option selected>Elige el valor</option>
            <option value="$5000">$5.000</option>
            <option value="$10.000">$10.000</option>
            <option value="$15.000">$15.000</option>
          </select>

          <input type="submit" value="Obtener">
        </form>
        
`
    let formGift = document.querySelector("#formGiftcard")
    formGift.addEventListener("submit", function (evento) { capturaDatosGift(evento) })



}

function capturaDatosGift(evento) {
    evento.preventDefault()
    console.log(evento)

    datosGift = {
        nombre: evento.target[0].value,
        email: evento.target[1].value,
        valor: evento.target[2].value,
    }
    console.log(datosGift)
    displayGiftcard(datosGift)

}

function displayGiftcard(datosGift) {
    document.getElementById("giftcardTarjeta").innerHTML =
        `
    <div class="carta" >
    <div class="contenedorGift"><img
            src="https://firebasestorage.googleapis.com/v0/b/vinoteca-5d1cd.appspot.com/o/multimedia%2Fimages%2FtarjetaRegalo.png?alt=media&token=1e57e76a-6dc2-46c1-bfca-0dc620acfa4e"
            alt="tarjeta de regalo"></div>
        <div class="contenidoRegalo">
          <p class="NombreGift">${datosGift.nombre}</p>
          <p class="textoGiftCard">Un Regalo Especial para ti</p>
          <p class="textoGiftCard">Consumo por: ${datosGift.valor}</p>
          <p class="small">Valido hasta 30/07/2023</p>
        </div>
        </div>

        <button type="button" id="enviarRegalo" class="botongift">Enviar Regalo</button>
        
    `
  envioRegalo()
   
}

function envioRegalo(){
    var botonEnviar=document.getElementById("enviarRegalo")
    botonEnviar.addEventListener("click",function(){
        saludo();
        limpiarFormulario();
    })
    
}
function saludo() {
    alert("¡Envio Exitoso!")
  }

  function limpiarFormulario() {
    document.getElementById("formGiftcard").reset();
    document.getElementById("giftcardTarjeta").innerHTML = "";
}