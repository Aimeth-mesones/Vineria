var vinos= dataVitis.vinos
console.log(vinos)

var vinosTintos = []
var vinosEspumantes=[]
var vinosBlancos=[]

for (var i=0; i<vinos.length; i++){
    if(vinos[i].tipo === "tinto"){
        vinosTintos.push(vinos[i])
    }
    else if (vinos[i].tipo === "espumante"){
       vinosEspumantes.push(vinos[i])
    }
    else{
        vinosBlancos.push(vinos[i])
    }
}
console.log("estos son los vinos blancos")
console.log(vinosBlancos)
console.log("estos son los vinos espumantes")
console.log(vinosEspumantes)
console.log("estos son los vinos tintos")
console.log(vinosTintos)