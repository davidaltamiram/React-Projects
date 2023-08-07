import { useState } from 'react';
import { sculptureList } from './data.js';

export default function Gallery() {
  const [index, setIndex] = useState(0);

  function siguiente() {
    setIndex((index + 1) % sculptureList.length);
  }

  function anterior() {
    // Asegurémonos de que el índice nunca sea negativo,
    // para que al hacer clic en "Anterior" regrese a la última escultura.
    setIndex((index - 1 + sculptureList.length) % sculptureList.length);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={anterior}>
        Anterior
      </button>
      <button onClick={siguiente}>
        Siguiente
      </button>
      <h2>
        <i>{sculpture.name}</i> por {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} de {sculptureList.length})
      </h3>
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
      <p>
        {sculpture.description}
      </p>
    </>
  );
}
