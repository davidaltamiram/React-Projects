import React from 'react';

// Creamos el componente de Gatito
const Gatito = (props) => {
  return (
    <div>
      <h2>Nombre: {props.nombre}</h2>
      <p>Color: {props.color}</p>
    </div>
  );
};

// Ahora creamos nuestro componente principal donde usaremos el componente Gatito
const App = () => {
  return (
    <div>
      <h1>Mis Gatitos</h1>
      <Gatito nombre="Firulais" color="blanco" />
      <Gatito nombre="Pelusa" color="naranja" />
      <Gatito nombre="Luna" color="gris" />
    </div>
  );
};

export default App;
