// pedir un numero de filas y columnas al usuario
// dibujar una tabla

let filas = parseInt(prompt('ingresa un numero de filas'));

let columnas =parseInt(prompt('ingresa numero de columnas'));

let resultado = filas * columnas;


document.write(`
<table>
<tbody>
  
`)


for(let i = 0; i<filas;i++){

    document.write(`
        <tr>
    `)

    for(let icolumnas = 0;icolumnas<columnas;icolumnas++){

        document.write(`
            
                <td>${resultado}</td>
                
        `)
        resultado--
    }
    document.write(`
     
        </tr>
    
    `)
}








document.write(`


</tbody>
</table>
`)