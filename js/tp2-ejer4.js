let numero1 = parseInt(prompt('ingresa un numero'));

do{
  if(isNaN(numero1)){
    alert('no valido,asegurate de ingresar un numero');
    numero1 = parseInt(prompt('ingresa un numero'));
  }
}while(isNaN(numero1)){
   let numero2 = parseInt(prompt("ingresa el segundo valor"));
   do{
    if(isNaN(numero2)){
      alert("no es un numero")
    }
   }while(isNaN(numero2)){
     if(confirm("confirma tus numeros")){
            
     }else{
      console.log(numero1+numero2)
     }
   }
   }
  
