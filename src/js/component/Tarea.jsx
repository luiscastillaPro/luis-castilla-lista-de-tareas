import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCheckSquare, faEdit, faSquare } from "@fortawesome/free-solid-svg-icons";

const Tarea = ({ tarea, borrarTarea, toggleCompletada, editarTarea }) => {
    const [editandoTarea, setEditandoTarea] = useState(false);
    const [nuevaTarea, setCambiarNuevaTarea] = useState(tarea.texto);

    const handleSutmit = (e) => {
        e.preventDefault();
        editarTarea(tarea.id, nuevaTarea);
        setEditandoTarea(false);
    };

    return (
        <li className="lista-tareas__tarea">
            <FontAwesomeIcon 
                icon={tarea.completada ? faCheckSquare : faSquare} 
                className="lista-tareas__icono lista-tareas__icono-check"
                onClick={()=>{toggleCompletada(tarea.id)}} 
            />
            <div className="lista-tareas__texto">
                {editandoTarea ?
                <form className="formulario-editar-tarea" onSubmit={handleSutmit}>
                    <input 
                        className="formulario-editar-tarea__input" 
                        type="text"
                        value={nuevaTarea}
                        onChange={(e)=> {setCambiarNuevaTarea(e.target.value)}}
                        >
                    </input>
                    <button className="formulario-editar-tarea__btn">Actualizar</button>
                </form> 
                :
                tarea.texto   
            }
            </div>
            <div className="lista-tareas__contenedor-botones">
                <FontAwesomeIcon
                    icon={faEdit}
                    className="lista-tareas__icono lista-tareas__icono__accion"
                    onClick={()=>{setEditandoTarea(!editandoTarea)}}
                />
                <FontAwesomeIcon
                    icon={faTrash}
                    className="lista-tareas__icono lista-tareas__icono__accion"
                    onClick={() => borrarTarea(tarea.id)}
                />
            </div>
        </li>
    );
};

export default Tarea;