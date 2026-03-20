import axios from "axios";

async function obtenerMoneda(codigoPais) {
  try {
    const response = await axios.get(
      `https://restcountries.com/v3.1/alpha/${codigoPais}`
    );

    const data = response.data[0];

    const monedas = data.currencies;
    const codigoMoneda = Object.keys(monedas)[0];
    const nombreMoneda = monedas[codigoMoneda].name;

    return nombreMoneda;

  } catch (error) {
    console.error("Error:", error.message);
    return null;
  }
}

export default obtenerMoneda;