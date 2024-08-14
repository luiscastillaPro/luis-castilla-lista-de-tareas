import React from "react";
import Tarea from "./Tarea";

const ListaTareas = ({ listaTareas, setListaTareas, mostrarCompletadas }) => {
    const toggleCompletada = (id) => {
        setListaTareas(listaTareas.map((tarea) => {
            if (tarea.id === id) {
                return{...tarea, is_done: !tarea.is_done};
            }
            return tarea;
        }));
    };

    const editarTarea = (id, nuevoTexto) => {
        setListaTareas(listaTareas.map((tarea) => {
            if (tarea.id === id) {
                return{...tarea, label: nuevoTexto}
            }
            return tarea;
        }));
    };

    const borrarTarea = (id) => {
        setListaTareas(listaTareas.filter(tarea => tarea.id !== id));
    };

    return (
        <ul className="lista-tareas">
            {
                listaTareas.length > 0 ? 
                ( 
                    listaTareas.map((tarea) => {
                        if (mostrarCompletadas || !tarea.is_done) {
                            return  (
                                <Tarea 
                                    key={tarea.id} 
                                    tarea={tarea} 
                                    toggleCompletada={toggleCompletada}
                                    editarTarea={editarTarea}
                                    borrarTarea={borrarTarea} 
                                />
                            );
                        }
                        return null;
                    })
                ) 
                : 
                (
                    <div className="lista-tareas__mensaje">- No hay tareas agregadas -</div>
                )
            }
        </ul>
    );
};

export default ListaTareas;