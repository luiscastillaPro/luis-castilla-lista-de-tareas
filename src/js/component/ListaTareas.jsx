import React from "react";
import Tarea from "./Tarea";

const ListaTareas = ({ listaTareas, setListaTareas }) => {
    const borrarTarea = (id) => {
        setListaTareas(listaTareas.filter(tarea => tarea.id !== id));
    };

    return (
        <ul className="lista-tareas">
            {listaTareas.length > 0 ? (
                listaTareas.map(tarea => (
                    <Tarea key={tarea.id} tarea={tarea} borrarTarea={borrarTarea} />
                ))
            ) : (
                <div className="lista-tareas__mensaje">- No hay tareas agregadas -</div>
            )}
        </ul>
    );
};

export default ListaTareas;