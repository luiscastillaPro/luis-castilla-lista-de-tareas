import React from "react";
import Tarea from "./Tarea";

const ListaTareas = ({ listaTareas, setListaTareas, mostrarCompletadas }) => {
    const toggleCompletada = (id) => {
        setListaTareas(listaTareas.map((tarea) => {
            if (tarea.id === id) {
                return{...tarea, completada: !tarea.completada}
            }
            return tarea;
        }))
    };

    const editarTarea = (id, nuevoTexto) => {
        setListaTareas(listaTareas.map((tarea) => {
            if (tarea.id === id) {
                return{...tarea, texto: nuevoTexto}
            }
            return tarea;
        }))
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
                    if (mostrarCompletadas) {
                        return  <Tarea 
                                    key={tarea.id} 
                                    tarea={tarea} 
                                    toggleCompletada={toggleCompletada}
                                    editarTarea={editarTarea}
                                    borrarTarea={borrarTarea} 
                                />
                    } else if (!tarea.completada) {
                        return  <Tarea 
                                    key={tarea.id} 
                                    tarea={tarea} 
                                    toggleCompletada={toggleCompletada}
                                    editarTarea={editarTarea}
                                    borrarTarea={borrarTarea} 
                                />
                    }
                    return;
                })
            ) 
            : 
            (
                <div className="lista-tareas__mensaje">- No hay tareas agregadas -</div>
            )}
        </ul>
    );
};

export default ListaTareas;