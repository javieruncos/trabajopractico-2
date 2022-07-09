// let frase = prompt("ingresa una frase");
// let confirmar = confirm("confirma tu frase")
//  if(confirmar === true){
//     document.write(frase)
//  }


let nombre1  = (prompt("ingresa tu nombre "));
let edad1 = parseInt(prompt("edad"))
let nombre2  = prompt("ingresa tu nombre");
let edad2 = parseInt(prompt("edad"))
let nombre3  = prompt("ingresa tu nombre");
let edad3 = parseInt(prompt("edad"))

if( edad1 >  edad2 & edad1 > edad3 ){
    document.write("el mayor de los  3 es: "+ nombre1 )
}else if(edad2 >  edad1 & edad2 > edad3){
    document.write("el mayor de los  3 es: "+ nombre2 )
}else if (edad3 >  edad1 & edad3 > edad2){
    document.write("el mayor de los  3 es: "+ nombre3 )
}else{
    document.write("los tres tienen la misma edad")
}
    

