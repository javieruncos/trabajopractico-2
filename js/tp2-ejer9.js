

// let frase = prompt("ingresa una frase");

// for(let i = 0; i <= frase.length;i++){
//     if (frase.charAt(i)=== "a" || frase.charAt(i)==="e"|| frase.charAt(i)==="i"|| frase.charAt(i)==="o" || frase.charAt(i)==="u"){
//         document.write(frase.charAt(i))
//     }
// }



// function contadorvocales(){
//     let frase = prompt("ingresa una frase");
//     let contador = 0;
//     let vocales  =["a","e","i","o","u"];


//     for(let i = 0; i < frase.length;i++){
//         if(vocales.indexOf(frase[i])>= 0){
//             contador++
//         }
//     }

//     return contador
// }
// console.log(contadorvocales())




// escribir numero del 1 al 500 
// tengo que saber que numero son multiplo de 9 o de 4

let numero = 1;
for(let i = 1;i<=500;i++){
    document.write(i);
    if(i % 4 === 0){
        document.write(' es multiplo de 4')
    }
    if(i % 9 === 0){
        document.write(' es multiplo de 9')
    }
    document.write('<br>');
    if(i % 5 === 0){
        document.write('<hr>')
    }

}