import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Tarea = ({ tarea, borrarTarea }) => {
    return (
        <li className="lista-tareas__tarea">
            <div className="lista-tareas__texto">{tarea.texto}</div>
            <div>
                <FontAwesomeIcon
                    icon={faTimes}
                    className="lista-tareas__icono lista-tareas__icono__accion"
                    onClick={() => { borrarTarea(tarea.id) }}
                />
            </div>
        </li>
    );
};

export default Tarea;