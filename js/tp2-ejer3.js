
  
//   for(let i = 0;i<=100;i++){
      
//       if(confirm('confirma tu frase')){
//           let frase = prompt('ingresa una frase'); 
//           i++
//           document.write(frase+"-")
//     }else{
//           break

//       }
//   }
    

for(let i = 0 ; i <= 20;i++){
    let frase = prompt('ingresa una frase');
    
    if(frase === null){
        break
    }
    document.write(frase+"-")
}
