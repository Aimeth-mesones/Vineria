function displayDetalle(id) {
    console.log(id)
    console.log(vinos)

    var detalleVino = []

    for (var i = 0; i < vinos.length; i++) {
        if (vinos[i].id == id) {
            detalleVino.push(vinos[i]);

        }
    }
    console.log(detalleVino)

    var contenidoDetalle
    contenidoDetalle =
        `<div class="detalleIzquierda">
            <div class="tituloDetalle"><p>${detalleVino[0].nombre}</p></div>
            <div class="galeriaDetalle">
              <div class="card card-detalle">
                <img src=${detalleVino[0].image} alt="${detalleVino[0].nombre}">
              </div>
              <div class="card card-detalle">
                <img src=${detalleVino[0].imageDos} alt="${detalleVino[0].nombre}">
              </div>
            </div>
            <div class="iconos">
            <i class="fa-regular fa-heart"></i>
            <i class="fa-brands fa-whatsapp"></i>
            <i class="fa-regular fa-envelope-open"></i>
            </div>
        </div>

<!-- FICHA TECNICA -->
<div class="card text-center personalizada">
  <div class="card-header">
    <ul class="nav nav-tabs card-header-tabs">
      <li class="nav-item">
        <a class="nav-link active" aria-current="true" href="#">FICHA TÉCNICA</a>
      </li>
    </ul>
  </div>
  <div class="card-body">
    <table class="table table-hover">
      <tbody>
        <tr>
          <th scope="row">Bodega: ${detalleVino[0].bodega}</th>
          <td></td>
        </tr>
        <tr>
          <th scope="row">Región: ${detalleVino[0].region}</th>
          <td></td>
        </tr>
        <tr>
          <th scope="row">Viñedo: ${detalleVino[0].viñedo}</th>
          <td></td>
        </tr>
        <tr>
          <th scope="row">Crianza: ${detalleVino[0].crianza}</th>
          <td></td>
        </tr>
        <tr>
          <th scope="row">Notas de Cata:${detalleVino[0].notas}</th>
          <td></td>
        </tr>
        <tr>
          <th scope="row">Tipo de producto: Vino ${detalleVino[0].tipo}</th>
          <td></td>
        </tr>
        <tr>
          <th scope="row">Varietal: ${detalleVino[0].varietal}</th>
          <td></td>
        </tr>
        <tr>
          <th scope="row">Presentación:${detalleVino[0].presentacion}</th>
          <td></td>
        </tr>
        <tr>
          <th scope="row">Tiempo de Crianza:${detalleVino[0].tiempo}</th>
          <td></td>
        </tr>
      </tbody>
    </table>
    </table>
  </div>
  </div>
    `

    var htmlDetalle = document.getElementById("detalles")
    htmlDetalle.style.display = "flex"
    htmlDetalle.innerHTML = contenidoDetalle
    document.getElementById("tarjetas").style.display = "none"

}

