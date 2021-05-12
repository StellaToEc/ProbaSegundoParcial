let bandera = 0;
let utilidad = 0;
let probabilidad = 0;

var ag,bg,cg,dg;

google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChart);

const solucionar = () => {
  x = document.getElementById("x").value;
  y = document.getElementById("y").value;
  z = document.getElementById("z").value * -1;

  let a = document.getElementById("a").value;
  let b = document.getElementById("b").value;
  let c = document.getElementById("c").value;
  let d = document.getElementById("d").value;
  ag=a; bg=b;cg=c;dg=d;
  
  probabilidad = parseFloat(a) + parseFloat(b) + parseFloat(c) + parseFloat(d);
   console.log(probabilidad);
  if (probabilidad == 1) {
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
    
    //const graph = document.querySelector(".grapScript");
    Swal.fire({
      icon: "success",
      title: "Resultados",
      html: `<p>La utilidad esperada con los datos ingresados es de: ${utilidad}$</p>
      <div id="columnchart_material" style="width: 800px; height: 500px; margin:50px;"></div>`,
    });
    //graph.innerHTML = '';
    drawChart();

  }
});


function drawChart() {
  var data = google.visualization.arrayToDataTable([
  ['Utilidad', 'Probabilidad'],
  ['d', dg*100],
  ['c', cg*100],
  ['b', bg*100],
  ['a', ag*100],
  ]);

  var options = {
  chart: {
      title: 'Gráfica de las probabilidades',
  },
  vAxis: {
      title: 'Probabilidad en %'
    }
  };

  var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

  chart.draw(data, google.charts.Bar.convertOptions(options));
}

/*function drawChart() {
  var data = google.visualization.arrayToDataTable([
  ['Utilidad', 'Probabilidad', 'Prob. frecuentista (sim) __'],
  ['d', dg*100, 15],
  ['c', cg*100, 25],
  ['b', bg*100, 35],
  ['a', ag*100, 35],
  ]);

  var options = {
  chart: {
      title: 'Gráfica de las probabilidades',
  },
  vAxis: {
      title: 'Probabilidad en %'
    }
  };

  var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

  chart.draw(data, google.charts.Bar.convertOptions(options));
}*/