let datosForm={}

function formularioInit(){

  construyeFormulario()
  console.log("inicie el formulario")
  console.log(datosForm)
}
function construyeFormulario() {

  var formularioContacto = document.querySelector("#formulario")
  formularioContacto.innerHTML =
    `
<form id="formContacto">
<label for="tunombre">Nombre</label>
<input type="text" id="tunombre" name="tunombre" placeholder="ingrese nombre y apellido">

<label for="tuemail">Email</label>
<input type="text" id="tuemail" name="tuemail" placeholder="email">

<label for="tutelefono">Telefono</label>
<input id="tutelefono" type="text" name="tutelefono" placeholder="ingrese numero de telefono">


<label for="tumensaje">Mensage</label>
<textarea id="tumensaje" name="tumensaje" placeholder="Dejanos tu mensaje"></textarea>

<input type="submit" value="Enviar">
</form>
`
  let formContacto = document.querySelector("#formContacto")
  formContacto.addEventListener("submit", function (evento) { capturaDatosContacto(evento) })
}



function capturaDatosContacto(evento) {
  evento.preventDefault()


  datosForm = {
    nombre: evento.target[0].value,
    email: evento.target[1].value,
    telefono: evento.target[2].value,
    mensaje: evento.target[3].value,
  }
  console.log(datosForm)
  
  saludo()
  limpiarFormulario()
}


function saludo() {
  
    alert("¡Formulario enviado!")
  }

function limpiarFormulario() {
  document.getElementById("tunombre").value = ""
  document.getElementById("tuemail").value = ""
  document.getElementById("tutelefono").value = ""
  document.getElementById("tumensaje").value = ""
}



