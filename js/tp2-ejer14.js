// let frase = prompt("ingresa una frase");
// let guion = frase.charAt(0);
// if(frase >= guion){
//     console.log(frase.charAt(0)+"-" + frase.charAt(1) +"-")
// }


let frase = prompt("ingresa una frase");



for (let i= 1; i <= frase.length;i++){

   if(i<= frase.length){
     document.write(frase.charAt(i) + "-")
   }
}



