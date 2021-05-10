let bandera=0;
let utilidad;
const solucionar = () =>{
    x = document.getElementById("x").value
    y = document.getElementById("y").value
    z = document.getElementById("z").value
    console.log(x);
    utilidad = (0.22)*x + (0.36)*y + (0.14)*z
}


const formulario = document.getElementById("sol");
formulario.addEventListener('submit', (event) => {
    bandera=0;
    event.preventDefault();
    solucionar()
    if(bandera===0){
        Swal.fire({
            icon: 'success',
            title: 'Resultados',
            html:  `<p>La utilidad esperada con los datos ingresados es de: ${utilidad}$</p>`
            
        })
    }
    
});