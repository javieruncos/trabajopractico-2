
    let frase=prompt("ingresa una frase");
    frase=frase.toLowerCase();
    let vocal =["a","e","i","o","u"]
     

 /*realiaze dos ejemplos de la solucion ,en el primer ejemplo use varios condicionales dentro de un ciclo for ,  el segundo ejemplo  seria la version abreviada de la solucion utilizando un solo if */



    //  for(let i = 0; i<frase.length;i++){
    //      if(frase.charAt(i)== vocal[0]){
    //          console.log(frase.indexOf("a"))
    //          break
    //      }else if(frase.charAt(i)== vocal[1]){
    //         console.log(frase.indexOf("e"))
    //         break
    //      }else if(frase.charAt(i)== vocal[2]){
    //         console.log(frase.indexOf("i"))
    //         break
    //      }else if(frase.charAt(i)== vocal[3]){
    //         console.log(frase.indexOf("o"))
    //         break
    //      }else if(frase.charAt(i)== vocal[4]){
    //         console.log(frase.indexOf("u"))
    //         break
    //      }
     
    //  }

    for(let i = 0;i<=frase.length;i++){
        if(frase.charAt(i)=== vocal[0] ||frase.charAt(i)===vocal[1] || frase.charAt(i)=== vocal[2] ||frase.charAt(i)== vocal[3] ||frase.charAt(i)== vocal[4]){
            console.log(frase.indexOf(frase[i]))
            break
        }
    }
    

    

    