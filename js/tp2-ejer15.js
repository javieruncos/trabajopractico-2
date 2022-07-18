let frase = prompt('ingresa una frase');
let vocales = ["a","e","i","o","u"]
let contador = 0;

for(let i = 0; i <= frase.length; i++){
  if(vocales.indexOf(frase[i]) != -1){
    contador++
  }
}

document.write("numero de vocales existentes en la frase: " + contador)




   
