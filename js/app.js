const cotizador = new API('04b30f4183679015807387bfcddc70a3d17537af66f41936b465ee4a7c26fd86');
const ui = new Interfaz();

let formularioMoneda = document.getElementById('moneda'),
  formularioCriptoMoneda = document.getElementById('criptomoneda');

//Añadimos el evento
const formulario = document.getElementById('formulario').addEventListener('submit', validarFormulario);

function validarFormulario(e) {
  e.preventDefault();

  // Seleccionamos las opciones en el formulario
  const monedaSeleccionada = formularioMoneda.options[formularioMoneda.selectedIndex].value;

  const criptoMonedaSeleccionada = formularioCriptoMoneda.options[formularioCriptoMoneda.selectedIndex].value;

  //Validamos el formulario

  if (monedaSeleccionada !== '' || criptoMonedaSeleccionada !== '') {

    
  } else {

    // Arroja alerta
    ui.mostrarMensaje('Ambos campos son obligatorios', 'alert bg-danger text-center');
    
    setTimeout(() => {
      document.querySelector('.mensajes div').remove();
    }, 4000);
  }
}