var vinos = dataVitis.vinos
console.log(vinos)

var vinosTintos = []
var vinosEspumantes = []
var vinosBlancos = []
let arrayBusqueda = []
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
console.log("estos son los vinos blancos")
console.log(vinosBlancos)
console.log("estos son los vinos espumantes")
console.log(vinosEspumantes)
console.log("estos son los vinos tintos")
console.log(vinosTintos)

// capturando el id de la seccion a la que se hace click en la barra de navegacion
var botonNav = document.getElementsByClassName("nav-link")
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
        case "promociones":
            console.log("estoy en promociones")
            break;
        case "regalos":
            console.log("estoy en regalos")
            break;
        case "tintos":
            display(vinosTintos)
            arrayBusqueda=vinosTintos
            break;
        case "blancos":
            display(vinosBlancos)
            arrayBusqueda=vinosBlancos
            break;
        case "espumantes":
            display(vinosEspumantes)
            arrayBusqueda=vinosEspumantes
            break;
        default: display(vinos)
        arrayBusqueda=vinos
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
                style="background-image:url(.multimedia/${array[i].imagen});background-repeat: no-repeat; background-size: cover;"
                class="img-fluid">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${array[i].nombre}</h5>
                  <p class="text-muted">${array[i].bodega}</p>
                  <p class="card-text">${array[i].notas}</p>
                  <a href="#" class="card-link">Ver Detalle</a>
                  <p class="card-text">${array[i].precio}</p>
                </div>
              </div>
            </div>
            <div class="row ">
              <div class="col-md-12">
                <div class="card-footer">
                  <form>
                    <div class="row">
                      <label for="cantidad" class="col-sm-4 col-form-label">Cantidad</label>
                      <div class=" col-sm-3">
                        <input type="number" class="form-control" id="cantidad" placeholder="1">
                      </div>
                      <div class="col-sm-5">
                        <button type="submit" class="btn btn-primary">Comprar</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        `
    }
    document.getElementById("tarjetas").innerHTML = html;
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