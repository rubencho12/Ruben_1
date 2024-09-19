let promedio1 = parseInt(prompt("ingrese promedio 1"))
let promedio2 = parseInt(prompt("ingrese promedio 1"))
let promedio3 = parseInt(prompt("ingrese promedio 1"))

let resultado = parseInt((promedio1 + promedio2 + promedio3))/3;

if (resultado >=4){
    document.write("pasaste")
}
else{
    document.write("reprobaste")
}