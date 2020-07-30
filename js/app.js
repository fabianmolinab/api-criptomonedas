let formularioMoneda = document.getElementById('moneda'),
  formularioCriptoMoneda = document.getElementById('criptomoneda');

//Añadimos el evento
const formulario = document.getElementById('formulario').addEventListener('submit', validarFormulario);

//Validamos el formulario

function validarFormulario(e) {
  e.preventDefault();

  // Seleccionamos las opciones en el formulario
  const monedaSeleccionada = formularioMoneda.options[formularioMoneda.selectedIndex].value;

  const criptoMonedaSeleccionada = formularioCriptoMoneda.options[formularioCriptoMoneda.selectedIndex].value;

  //Validamos el formulario

  if (monedaSeleccionada !== '' | criptoMonedaSeleccionada !== '') {
    console.log('no esta vacio');
  } else {
    console.log('esta vacio');
  }
}