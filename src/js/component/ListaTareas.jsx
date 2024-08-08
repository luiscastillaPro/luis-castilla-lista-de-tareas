import React from "react";
import Tarea from "./Tarea";

const ListaTareas = ({tareas, cambiarTareas}) => {
    const borrarTarea = (id) => {
        cambiarTareas(tareas.filter(tarea => tarea.id !== id));
    };

    return (
        <ul className="lista-tareas">
            {tareas.length > 0 ? tareas.map((tarea) => {
                return (
                    <Tarea
                        key={tarea.id}
                        tarea={tarea}
                        borrarTarea={borrarTarea}
                    />
                );
            })
            :
            <div className="lista-tareas__mensaje"> - No hay tareas agregadas - </div>
            }
        </ul>
    );
};

export default ListaTareas;
