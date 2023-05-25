let datosForm
function construyeFormulario(){

   var formularioContacto = document.getElementById("formulario")  
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
    
}


     
function capturaDatosContacto(evento){
   evento.preventDefault()
   console.log(evento)

        datosForm ={
        nombre: evento.target[0].value,
          email: evento.target[1].value,
          telefono:evento.target[2].value,
          mensaje: evento.target[3].value,    
       }
          console.log(datosForm)
  saludo(datosForm)
}
 


 var saludoHtml = document.getElementById("saludo")
   
 saludoHtml.style.display = "none"
 
    function saludo(datosForm) {
  
      formulario.style.display = "none"
      saludoHtml.style.display = "flex"
      saludoHtml.innerHTML =
      `
      <h1>Gracias ${datosForm.nombre} por dejarnos tu comentario</h1>
      `
    }  
  
        


