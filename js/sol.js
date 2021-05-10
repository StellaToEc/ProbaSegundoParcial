let bandera = 0;
let utilidad = 0;
let probabilidad = 0;
const solucionar = () => {
  x = document.getElementById("x").value;
  y = document.getElementById("y").value;
  z = document.getElementById("z").value * -1;
  let a = document.getElementById("a").value;
  let b = document.getElementById("b").value;
  let c = document.getElementById("c").value;
  let d = document.getElementById("d").value;

  probabilidad = parseFloat(a) + parseFloat(b) + parseFloat(c) + parseFloat(d);
//   console.log(probabilidad);
  if (probabilidad !== 1) {
    Swal.fire({
      icon: "error",
      title: "Error",
      html: `La suma de las probabilidades debe ser 1</p>`,
    });
    bandera = 1;
  }
  utilidad = a * x + b * y + c * 0 + d * z;
//   console.log(utilidad);
};

const formulario = document.getElementById("sol");
formulario.addEventListener("submit", (event) => {
  bandera = 0;
  event.preventDefault();
  solucionar();
  if (bandera === 0) {
    Swal.fire({
      icon: "success",
      title: "Resultados",
      html: `<p>La utilidad esperada con los datos ingresados es de: ${utilidad}$</p>`,
    });
  }
});
