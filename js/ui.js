
class Interfaz {

  constructor() {
    this.init();
  }
  init() {
    this.construirSelect();
  }
  construirSelect() {
    cotizador.obtenerMonedasAPI()
      .then(monedas => {

        // Se crea el select de las opciones del formulario
        const select = document.getElementById('criptomoneda');
        
        //Llama los resultados de la api para agregarlos al formulario
        for (const [key, value] of Object.entries(monedas.monedas.Data)) {
          
          const opcion = document.createElement('option');
          opcion.value = value.Symbol;
          opcion.appendChild(document.createTextNode(value.CoinName));
          select.appendChild(opcion);
        }
      })
  }

  mostrarMensaje(mensaje,clases) {
    const div = document.createElement('div');
    div.className = clases;
    div.appendChild(document.createTextNode(mensaje));

    const divMensaje = document.querySelector('.mensajes');
    divMensaje.appendChild(div);
  }

  mostrarResultado(resultado, moneda, crypto) {
    const datosMoneda = resultado[crypto][moneda];

    let precioRecortado = datosMoneda.PRICE.toFixed(2);

    //Insertamos el resultado
    let templateHTML = `
      <div class="card bg-warning">
        <div class="card-body text-light">
          <h2 class="card-title">Resultado:</h2>
          <p>El precio de ${datosMoneda.FROMSYMBOL} a moneda ${datosMoneda.TOSYMBOL} es de: ${precioRecortado}
          </p>
        </div>
      </div>
    `;

    document.getElementById('resultado').innerHTML = templateHTML;
  }
}