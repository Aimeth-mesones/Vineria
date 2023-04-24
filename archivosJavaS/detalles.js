var vinos = dataVitis.vinos
console.log(vinos)

console.log(location.search) //busca los datos en la url
var id = location.search.split("?id=").filter(Number)

var selectedId = id[0]
console.log(selectedId)

// var detalleVino = []

// for (var i = 0; i < vinos.length; i++) {
//     if (vinos[i].id == selectedId) {
//         detalleVino.push(vinos[i]);
//     }
// }

// var contenidoDetalle
// contenidoDetalle =
// `
// <div class="card" style="width: 18rem;">
//         <img src="../multimedia/trapiche-reserva-chardonnay.jpg" class="card-img-top"
//           alt="${detalleVino[0].name}">
//         <div class="card-body">
//           <p class="card-text">Vino Trapiche Reserva Chardonnay</p>
//         </div>
//       </div>
//       <!-- FICHA TECNICA -->
//       <div class="card text-center personalizada">
//         <div class="card-header">
//           <ul class="nav nav-tabs card-header-tabs">
//             <li class="nav-item">
//               <a class="nav-link active" aria-current="true" href="#">FICHA TÉCNICA</a>
//             </li>
//             <li class="nav-item">
//               <a class="nav-link" href="#">ACERCA DE LA LINEA</a>
//             </li>
//             <li class="nav-item">
//               <a class="nav-link disabled">OPINIONES</a>
//             </li>
//           </ul>
//         </div>
//         <div class="card-body">
//           <table class="table table-dark table-hover">
//             <tbody>
//               <tr>
//                 <th scope="row">Bodega:</th>
//                 <td></td>
//               </tr>
//               <tr>
//                 <th scope="row">Región:</th>
//                 <td></td>
//               </tr>
//               <tr>
//                 <th scope="row">Viñedo:</th>
//                 <td></td>
//               </tr>
//               <tr>
//                 <th scope="row">Crianza:</th>
//                 <td></td>
//               </tr>
//               <tr>
//                 <th scope="row">Notas de Cata:</th>
//                 <td></td>
//               </tr>
//               <tr>
//                 <th scope="row">Tipo de productos:</th>
//                 <td></td>
//               </tr>
//               <tr>
//                 <th scope="row">Varietal:</th>
//                 <td></td>
//               </tr>
//               <tr>
//                 <th scope="row">Presentación:</th>
//                 <td></td>
//               </tr>
//               <tr>
//                 <th scope="row">Tiempo de Crianza:</th>
//                 <td></td>
//               </tr>
//             </tbody>
//           </table>
//           </table>
//         </div>
//       </div>
// `

// document.getElementById("detalles").innerHTML=contenidoDetalle