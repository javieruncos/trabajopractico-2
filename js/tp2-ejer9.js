




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