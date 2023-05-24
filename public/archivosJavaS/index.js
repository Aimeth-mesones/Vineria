const coleccionVinos = firebase.firestore().collection("vinos");
const coleccionBodegas = firebase.firestore().collection("bodegas");

// llama a la coleccion que creamos en firebase database

let dataVinos = []
let vinos = []
let vinosTintos = []
let vinosEspumantes = []
let vinosBlancos = []
let arrayBusqueda = []
let tintosDestacados = []
let blancosDestacados = []
let espumantesDestacados = []
let vinosDestacados = []
let dataBodegas = []
let bodegas=[]

async function getDB() {
  await coleccionVinos.get()
    .then((results) => {
      console.log(results)
      const data = results.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      dataVinos.push(...data)

      vinos = dataVinos
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

        }
      }

     
      ordenBlancos()
      ordenTintos()
      ordenEspumantes()
      tintosDisplay(tintosDestacados)
      blancosDisplay(blancosDestacados)
      espumantesDisplay(espumantesDestacados)


    })
}; getDB()

async function getBodegas() {
  await coleccionBodegas.get()
    .then((results) => {
      console.log(results)
      const data = results.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      // console.log(data)
      dataBodegas.push(...data)

      bodegas = dataBodegas
      console.log(bodegas)
      mostrarbodegas(bodegas)

    })
}; getBodegas()


console.log("vinos Destacados", vinosDestacados)

console.log(vinos)

console.log("estos son los vinos blancos")
console.log(vinosBlancos)
console.log("estos son los vinos espumantes")
console.log(vinosEspumantes)
console.log("estos son los vinos tintos")
console.log(vinosTintos)
var botonCompra = document.getElementById("btncompras")
console.log(botonCompra)
botonCompra.addEventListener("click", function (e) {
  compras()
})

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
      document.getElementById("seccionBodegas").style.display="flex",
      document.getElementById("tituloSeccion").innerHTML="Nuestras Bodegas Favoritas",
      document.getElementById("carouselAuto").style.display = "none",
      document.getElementById("destacadosVinos").style.display = "none",
        document.getElementById("seccionCompras").style.display = "none",
        document.getElementById("detalles").style.display = "none",
        document.getElementById("vinosSeccion").style.display = "flex",
        document.getElementById("linea").style.display = "none",
        document.getElementById("tarjetas").style.display = "none",
        document.getElementById("nosotros").style.display="none",
        document.getElementById("bodegasHome").style.display="none",
       
        mostrarbodegas(bodegas)
       
      break;
   
    case "vinos":
      console.log("todos los vinos"),
        console.log(vinos)
      document.getElementById("carouselAuto").style.display = "none",
        document.getElementById("tarjetas").style.display = "flex",
        document.getElementById("destacadosVinos").style.display = "none",
        document.getElementById("seccionCompras").style.display = "none",
        document.getElementById("vinosSeccion").style.display = "flex",
        document.getElementById("linea").style.display = "flex",
        document.getElementById("vinosSeccion").innerHTML = "Nuestros Vinos",
        document.getElementById("detalles").style.display = "none",
        document.getElementById("btncompras").style.visibility="visible",
        document.getElementById("nosotros").style.display="none",
        document.getElementById("bodegasHome").style.display="none",
        display(vinos),
        arrayBusqueda = vinos
      break;
    case "tintos":
      display(vinosTintos),
        document.getElementById("carouselAuto").style.display = "none",
        document.getElementById("tarjetas").style.display = "flex",
        document.getElementById("destacadosVinos").style.display = "none",
        document.getElementById("seccionCompras").style.display = "none",
        document.getElementById("vinosSeccion").innerHTML = "Vinos Tintos",
        document.getElementById("btncompras").style.visibility="visible",
        document.getElementById("detalles").style.display = "none",
        document.getElementById("nosotros").style.display="none",
        document.getElementById(" bodegasHome").style.display="none",
        arrayBusqueda = vinosTintos,
        console.log("vinos tintos")
      break;
    case "blancos":
      display(vinosBlancos),
        document.getElementById("carouselAuto").style.display = "none",
        document.getElementById("tarjetas").style.display = "flex",
        document.getElementById("destacadosVinos").style.display = "none",
        document.getElementById("seccionCompras").style.display = "none",
        document.getElementById("vinosSeccion").style.display = "flex",
        document.getElementById("linea").style.display = "flex",
        document.getElementById("vinosSeccion").innerHTML = "Vinos Blancos",
        document.getElementById("detalles").style.display = "none",
        document.getElementById("btncompras").style.visibility="visible",
        document.getElementById("nosotros").style.display="none",
        document.getElementById(" bodegasHome").style.display="none",
        arrayBusqueda = vinosBlancos,
        console.log("vinos blancos")
      break;
    case "espumantes":
      display(vinosEspumantes),
        document.getElementById("carouselAuto").style.display = "none",
        document.getElementById("tarjetas").style.display = "flex",
        document.getElementById("destacadosVinos").style.display = "none",
        document.getElementById("seccionCompras").style.display = "none",
        document.getElementById("vinosSeccion").style.display = "flex",
        document.getElementById("linea").style.display = "flex",
        document.getElementById("vinosSeccion").innerHTML = "Vinos Espumantes",
        document.getElementById("detalles").style.display = "none",
        arrayBusqueda = vinosEspumantes,
        document.getElementById("btncompras").style.visibility="visible",
        document.getElementById("nosotros").style.display="none",
        document.getElementById(" bodegasHome").style.display="none",
        console.log("vinos espumantes")
      break;

    default:
      document.getElementById("tarjetas").style.display = "none",
        document.getElementById("carouselAuto").style.display = "flex",
        document.getElementById("destacadosVinos").style.display = "flex",
        document.getElementById("detalles").style.display = "none",
        document.getElementById("seccionCompras").style.display = "none",
        document.getElementById("vinosSeccion").style.display = "none",
        document.getElementById("linea").style.display = "none",
        document.getElementById("btncompras").style.visibility="visible",
        document.getElementById("nosotros").style.display="none",
        console.log("estoy en home")

  }
}

function display(array) {
  var html = "";
  for (var i = 0; i < array.length; i++) {
    var promo = array[i].promo;
    var descuentoVisible = promo !== 0 ? "" : "hidden"; 
    html += `
        <div class="col">
          <div class="card">
            <div class="imageContent">
              <img src="${array[i].image}">
            </div>
            <div class="card-body">
                <h5 class="card-title">${array[i].nombre}</h5>
                <p class="text-muted">Bodega:${array[i].bodega}</p>
                <p class="card-text">${array[i].notas}</p>
            </div>
            <div class="card-footer">               
                <p class="card-text">Precio: $ ${array[i].precio}</p>
                <button id=${array[i].id} class="btn btn-primary botonesDetalles ">Más Info</button>
            </div>
            <div class="formaDescuento ${descuentoVisible}" id=descuento${array[i].id} ><p>${promo}% OFF</p></div>
          </div>
        </div>
        `
  
       
  }
  
  document.getElementById("tarjetas").innerHTML = html;
  var botones = document.querySelectorAll(".botonesDetalles")
  for (var i = 0; i < botones.length; i++) {
    botones[i].addEventListener("click", function (e) {

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


// ORDENANDO LOS ARRAY DE CADA TIPO DE VINO POR PRECIO DE MENOR A MAYOR

function ordenBlancos() {
  // ordena de menor a mayor por precios
  var blancosOrd = vinosBlancos.sort((a, b) => { return a.precio - b.precio })
  for (var i = 0; i < 2; i++) {
    blancosDestacados.push(blancosOrd[i])
  }
}
function ordenTintos() {
  // ordena de menor a mayor por precios
  var tintosOrd = vinosTintos.sort((a, b) => { return a.precio - b.precio })
  for (var i = 0; i < 2; i++) {
    tintosDestacados.push(tintosOrd[i])
  }
}

function ordenEspumantes() {
  // ordena de menor a mayor por precios
  var espumantesOrd = vinosEspumantes.sort((a, b) => { return a.precio - b.precio })
  for (var i = 0; i < 2; i++) {
    espumantesDestacados.push(espumantesOrd[i])
  }
}

// CREANDO LAS CARTAS PARA EL CAROUSEL DE VINOS DESTACADOS
function tintosDisplay(tintosDestacados) {

  var htmlTintos = "";
  for (var i = 0; i < tintosDestacados.length; i++) {
    htmlTintos += `
    <div class="card cardDestacado">
              <div class="image-wrapper"><img
                  src="${tintosDestacados[i].image}"
                  alt="${tintosDestacados[i].nombre}"></div>

              <div class="card-body">
                <p class="card-title title-destacado">${tintosDestacados[i].nombre}</p>
                <p class="card-text text-destacado">Vino:${tintosDestacados[i].tipo}</p>
                <p class="card-text text-destacado">Bodega: ${tintosDestacados[i].bodega}</p>
                <p class="card-text ">Precio: $ ${tintosDestacados[i].precio}</p>
              </div>
            </div>
    `
  }
  document.getElementById("tintosDestacados").innerHTML = htmlTintos;
}

function blancosDisplay(blancosDestacados) {
  var htmlBlancos = "";
  for (var i = 0; i < blancosDestacados.length; i++) {
    htmlBlancos += `
    <div class="card cardDestacado">
              <div class="image-wrapper"><img
                  src="${blancosDestacados[i].image}"
                  alt="${blancosDestacados[i].nombre}"></div>

              <div class="card-body">
                <p class="card-title title-destacado">${blancosDestacados[i].nombre}</p>
                <p class="card-text text-destacado">Vino:${blancosDestacados[i].tipo}</p>
                <p class="card-text text-destacado">Bodega:${blancosDestacados[i].bodega}</p>
                <p class="card-text ">Precio: $ ${blancosDestacados[i].precio}</p>
              </div>
          
            </div>
    `
  }
  document.getElementById("blancosDestacados").innerHTML = htmlBlancos;
}

function espumantesDisplay(espumantesDestacados) {
  var htmlEspumantes = "";
  for (var i = 0; i < espumantesDestacados.length; i++) {
    htmlEspumantes += `
    <div class="card cardDestacado">
              <div class="image-wrapper"><img
                  src="${espumantesDestacados[i].image}"
                  alt="${espumantesDestacados[i].nombre}"></div>

              <div class="card-body">
                <p class="card-title title-destacado">${espumantesDestacados[i].nombre}</p>
                <p class="card-text text-destacado">Vino:${espumantesDestacados[i].tipo}</p>
                <p class="card-text text-destacado">Bodega:${espumantesDestacados[i].bodega}</p>
                <p class="card-text ">Precio: $ ${espumantesDestacados[i].precio}</p>
              </div>
              
            </div>
    `
  }
  document.getElementById("espumantesDestacados").innerHTML = htmlEspumantes;
}

