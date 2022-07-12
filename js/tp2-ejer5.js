 

let numeroDni = parseInt(prompt('ingresa un numero'))
let letras = 'TRWAGMYFPDXBNJZSQVLCKE'
 

let divisor = 23;

let resultado = numeroDni % divisor;



if(isNaN(numeroDni)){
    alert('no es valido')
    numeroDni=parseInt(prompt("ingresa un numero nuevamente"))
}else{
   
    for(let i = 0; i<letras.length;i++){
     
        if(resultado === letras.indexOf(letras[i])){  
                if(confirm('confirma tus numero')){

                }else{
                    console.log(letras.charAt(i))
                }
            }
    }
}
    




            

            
         

          

    










// for(let i = 0; i<letras.length;i++)

// for(let i = 0; i<letras.length;i++){
        
//             if(isNaN(numeroDni)){
//                 alert('no valido')
//                 numeroDni = parseInt(prompt('ingresa tu numero de dni'));
               
               
                
//             }else if(isNaN(numeroDni)){
//                 (resultado === letras.indexOf(letras[i]))
//                 console.log(letras.charAt(i))
//             }

//             }

       
    



// // if(resultado === 16){
//     console.log(letras.indexOf("Z"))
// }


    