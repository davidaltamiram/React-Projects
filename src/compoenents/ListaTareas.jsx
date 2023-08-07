import React , { useState } from 'react';

function ListaApp() {
    const TareasLista = ["Hacer un curso", "Aprender React", "Crear proyectos con react"];
    const [tareas, setTareas] = useState(TareasLista);

    function Submit(evento) {
        evento.preventDefault();

        const nuevaTarea = evento.target.tarea.value;
        //[...tareas] utiliza el operador spread para generar una copia del array de TareasLista y al final agrega el valor obtenido en nuevaTarea, obteniendo asi una copia del array con la ultima tarea
        setTareas([...tareas, nuevaTarea]);
    }

    return (
        <div>
            <h1>Lista de Tareas</h1>
            <ul>
                {tareas.map((tarea, indice) =>{
                    //necesario el return para que regrese los valores del metodo map
                   return <li key={indice}>{tarea}</li>
                })}
            </ul>
            <form onSubmit={Submit}>
                <input type="text" name="tarea"/>
                <button type="submit">Añadir Tarea</button>
            </form>
        </div>
    );
}

export default ListaApp;