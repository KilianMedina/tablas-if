import React, {useState} from "react";

const App = () => {
  const [color, setColor] = useState('')
  const [tabla, setTabla] = useState('')

  const colorAction = (event) => {
    setColor(event.target.value)
  }

  const imprimirTabla = () => {
    let resultado = '';
    let numero = 0;

    if (color === "Amarillo") {
      resultado = "Tabla del 2.\n"
      numero = 2
    } else if (color === 'Morado') {
      resultado = "Tabla del 7.\n"
      numero = 7
    } else if (color === 'Rosa') {
      resultado = "Tabla del 9.\n"
      numero = 9
    } else if (color === 'Azul') {
      resultado = "Tabla del 6.\n"
      numero = 6
    } else if (color === 'Blanco') {
      resultado = "Tabla del 12.\n"
      numero = 12
    } else {
      setTabla('');
      return
    }

    for (let i = 1; i <= 10; i++) {
      resultado += `${numero}x${i} = ${numero * i}\n`;
    }
    setTabla(resultado);
  }

  return (
    <div>
      <h1>Tablas de multiplicacion</h1>
      <select
        onChange={colorAction}      
      >
        <option value="">Selecciona un color</option>
        <option value="Amarillo">Amarillo</option>
        <option value="Morado">Morado</option>
        <option value="Rosa">Rosa</option>
        <option value="Azul">Azul</option>
        <option value="Blanco">Blanco</option>
      </select>
      <button
        onClick={imprimirTabla}
      >
        Imprimir tabla
      </button>
      <pre>{tabla}</pre>
    </div>
  )
}

export default App