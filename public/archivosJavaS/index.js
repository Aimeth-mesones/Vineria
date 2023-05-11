const coleccionVinos = firebase.firestore().collection("vinos"); 

  // llama a la coleccion que creamos en firebase database
  
  let dataVinos=[]
  let vinos=[]
  let vinosTintos = []
  let vinosEspumantes = []
  let vinosBlancos = []
  let arrayBusqueda = []

 async function getDB(){
await coleccionVinos.get()
  .then((results) => {
    console.log(results)
    const data = results.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    dataVinos.push(...data)

    vinos=dataVinos
    // console.log("Toda data en la colección 'vinos' ", data); 

    for (var i = 0; i < vinos.length; i++) {
      if (vinos[i].tipo === "tinto") {
        vinosTintos.push(vinos[i])
      }
      else if (vinos[i].tipo === "espumante") {
        vinosEspumantes.push(vinos[i])
      }
      else {
        vinosBlancos.push(vinos[i])
      }}
  })};getDB()
  // console.log(dataVinos)

  console.log(vinos)
 





console.log("estos son los vinos blancos")
console.log(vinosBlancos)
console.log("estos son los vinos espumantes")
console.log(vinosEspumantes)
console.log("estos son los vinos tintos")
console.log(vinosTintos)

// capturando el id de la seccion a la que se hace click en la barra de navegacion
var botonNav = document.getElementsByClassName("link")
console.log(botonNav)

for (var i = 0; i < botonNav.length; i++) {
  const elementos = botonNav[i];

  elementos.addEventListener("click", function (e) {
    navegacion(e.target.id);
  })
}

function navegacion(id) {
  switch (id) {
    case "bodegas":
      console.log("estoy en bodegas")
      break;
     case "regalos":
      console.log("estoy en regalos")
      break;
    case "vinos":
      console.log("todos los vinos"),
      console.log(vinos)
      document.getElementById("carouselAuto").style.display="none",
      document.getElementById("tarjetas").style.display="flex",
      document.getElementById("destacadosVinos").style.display="none",
      display(vinos),
      arrayBusqueda = vinos
      break;
    case "tintos":
      display(vinosTintos),
      document.getElementById("carouselAuto").style.display="none",
      document.getElementById("tarjetas").style.display="flex",
      document.getElementById("destacadosVinos").style.display="none",
      arrayBusqueda = vinosTintos,
      console.log("vinos tintos")
      break;
    case "blancos":
      display(vinosBlancos),
      document.getElementById("carouselAuto").style.display="none",
      document.getElementById("tarjetas").style.display="flex",
      document.getElementById("destacadosVinos").style.display="none",
      arrayBusqueda = vinosBlancos,
      console.log("vinos blancos")
      break;
    case "espumantes":
      display(vinosEspumantes),
      document.getElementById("carouselAuto").style.display="none",
      document.getElementById("tarjetas").style.display="flex",
      document.getElementById("destacadosVinos").style.display="none",
      arrayBusqueda = vinosEspumantes,
      console.log("vinos espumantes")
      break;

    default: 
    
    document.getElementById("tarjetas").style.display="none",
      document.getElementById("carouselAuto").style.display="flex",
      document.getElementById("destacadosVinos").style.display="flex",
      document.getElementById("detalles").style.display="none",
      console.log("estoy en home")
      
  }
}

function display(array) {
 
  var html = "";
  for (var i = 0; i < array.length; i++) {
    html += `
        <div class="col">
          <div class="card mb-3 h-100" style="max-width: 540px;">
            <div class="row g-0">
              <div class="col-md-4"
                style="background-image:${array[i].image});background-repeat: no-repeat; background-size: cover;"
                class="img-fluid">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${array[i].nombre}</h5>
                  <p class="text-muted">${array[i].bodega}</p>
                  <p class="card-text">${array[i].notas}</p>
                  <a href="#" class="card-link">Ver Detalle</a>
                  <p class="card-text">Precio: $ ${array[i].precio}</p>
                </div>
              </div>
            </div>
            <div class="row ">
              <div class="col-md-12">
                <div class="card-footer">               
                        <button id=${array[i].id} class="btn btn-primary botonesDetalles ">Ver mas</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        `
      
  }

  document.getElementById("tarjetas").innerHTML = html;
  var botones=document.querySelectorAll(".botonesDetalles")
  for(var i=0; i<botones.length;i++){
    botones[i].addEventListener("click", function(e){
    
      console.log("hice click")
      displayDetalle(e.target.id)
      
    })
  }
 
}
navegacion(home)

// FILTRO DE BUSQUEDA
var busquedaInput = document.getElementById("busqueda")
busquedaInput.addEventListener("keyup", (vino) => busquedaSearch(vino))

let datosIngresados

function busquedaSearch(vino) {
  datosIngresados = vino.target.value.trim().toLowerCase()
  console.log(datosIngresados)

  filtroDeBusqueda = arrayBusqueda.filter(vino => vino.bodega.toLowerCase().includes(datosIngresados))
  if (filtroDeBusqueda.length > 0) {
    display(filtroDeBusqueda)

  }
  else {
    document.getElementById("tarjetas").innerHTML = `<h1>No se encontraron resultados</h1>`
  }
}