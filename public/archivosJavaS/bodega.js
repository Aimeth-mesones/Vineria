function mostrarbodegas(bodegas){
  console.log(bodegas)
    var htmlBodegas = "";
    for (var i = 0; i < bodegas.length; i++) {
    
      htmlBodegas += `  
      <p class="tituloSeccionDestacado" id="tituloSeccion"></p>
      <hr class="misc gray-misc" id="linea">
      <div class="card card-bodega">
        <img src="${bodegas[i].imagenBodega}" class="card-img-top" alt="${bodegas[i].nombre}">
        <div class="card-body body-bodegas">
          <h5 class="card-title">${bodegas[i].nombre}</h5>
          <p class="card-text textoBodega">${bodegas[i].info}</p>
          <p class="card-text textoBodega">Ubicacion: ${bodegas[i].ubicacion}</p>
          <div>
            <a href="${bodegas[i].web}" class="card-link textoBodega">Ir al Sitio Web</a>
          </div>
        </div>
      </div>
       `

    }
  document.getElementById("seccionBodegas").innerHTML=htmlBodegas
document.getElementById("vinosSeccion").innerHTML="Nuestras Bodegas Favoritas"}