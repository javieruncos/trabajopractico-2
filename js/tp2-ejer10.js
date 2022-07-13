// pedir un numero de filas y columnas al usuario
// dibujar una tabla

let filas = parseInt(prompt('ingresa un numero de filas'));

let columnas =parseInt(prompt('ingresa numero de columnas'));


document.write(`
<table>
<tbody>
  
`)


for(let i = 0; i<filas;i++){

    document.write(`
    
        <tr>
            <td>hola</td>
            <td>mundo</td>
           
        </tr>
    
    `)
}








document.write(`


</tbody>
</table>
`)