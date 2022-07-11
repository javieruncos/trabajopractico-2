

// let frase = prompt("ingresa una frase");

// for(let i = 0; i <= frase.length;i++){
//     if (frase.charAt(i)=== "a" || frase.charAt(i)==="e"|| frase.charAt(i)==="i"|| frase.charAt(i)==="o" || frase.charAt(i)==="u"){
//         document.write(frase.charAt(i))
//     }
// }



function contadorvocales(){
    let frase = prompt("ingresa una frase");
    let contador = 0;
    let vocales  =["a","e","i","o","u"];


    for(let i = 0; i < frase.length;i++){
        if(vocales.indexOf(frase[i])>= 0){
            contador++
        }
    }

    return contador
}
console.log(contadorvocales())
