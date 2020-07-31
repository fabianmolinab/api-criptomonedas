class API {
  constructor(apikey) {
    this.apikey = apikey;
  }
  //Obtener todos las monedas
  async obtenerMonedasAPI() {
    const url = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apikey}`;

    const urlObtenerMonedas = await fetch(url);

    const monedas = await urlObtenerMonedas.json();

    console.log(monedas)
    return {
      monedas
    }
  }
}