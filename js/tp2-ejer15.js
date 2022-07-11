

let frase = prompt("ingresa una frase");
frase = frase.toLowerCase()
let vocal = ["a","e","i","o","u"];
let contador = 0;

for(let i = 0; i<frase.length;i++){
    if (vocal.indexOf(frase[i])
    != -1){
        contador++
        console.log(frase);
        
    }
}
//     if(frase.charAt(i)=== vocal[0]||frase.charAt(i)=== vocal[1]||frase.charAt(i)=== vocal[3]||frase.charAt(i)=== vocal[4]||frase.charAt(i)=== vocal[5]){
//         contador++
//         console.log(contador)
//     }
// }

