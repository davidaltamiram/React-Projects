import React from 'react';
import './Profile.css';
import Users from './Users';

//Si se escribe fuera de la funcion react renderizara como un componente extra dentro del mismo y lo mostrara 
//const People = []

//funcion primaria
function Avatar() {
//sI se escribe dentro la funcion tomara el array vacio y no permitira renderizarlo solo
const People = [];

//Estructura de componente en plantilla para renderizar
    Users.map((data) => {
      People.push(
      <div>
        <Saludo/>
      <img className="avatar" width={90} height={90} src={data.img} alt={data.name} />
      <h3>{data.name}</h3>
      <h3>{data.age}</h3>
        <Mensaje/>
      </div>
      )
    })

    return (
        <div>
          {People}
        </div>
      );
}



// crear plantillas indivuduales para renderizar un componente con los demas componentes dentro
function Plantilla() {
    return (
      <div>
        <Saludo />
        <Mensaje/>
      </div>
    );
  }


//Componentes separados
  const Saludo = () => <h2>Bienvenido</h2>;
  const Mensaje = () => {
    return <p>Eres un invitado de honor</p>;
  };
  
//Segunda funcion que se exporta con nombre de Profile que dentro retorna el componente Avatar
export default function Profile() {
    return (

      <Avatar
      />
    );
}