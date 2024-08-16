import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCheckSquare, faEdit, faSquare } from "@fortawesome/free-solid-svg-icons";

const Tarea = ({ tarea, borrarTarea, toggleCompletada, editarTarea }) => {
    const [editandoTarea, setEditandoTarea] = useState(false);
    const [nuevaTarea, setCambiarNuevaTarea] = useState(tarea.label);

    const handleSutmit = (e) => {
        e.preventDefault();

        fetch(`https://playground.4geeks.com/todo/todos/${tarea.id}`,{
            method: "PUT",
            body: JSON.stringify({ 
                label: nuevaTarea,
                is_done: tarea.is_done
            }),
            headers: {
                    "Content-Type": "application/json"
                  }
    
            })
            .then(res => res.json())
            .then(data => editarTarea(data.id, data.label))
            .catch(error => console.error("Error al cargar la lista:", error))
        
        
        setEditandoTarea(false);
    };

    const handleToggleCompletada = () => {

        const nuevaCompletada = !tarea.is_done;

        fetch(`https://playground.4geeks.com/todo/todos/${tarea.id}`, {
            method: "PUT",
            body: JSON.stringify({
                label: tarea.label,
                is_done: nuevaCompletada
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(data => {
            toggleCompletada(tarea.id); 
        })
        .catch(error => console.error("Error al actualizar la tarea:", error));
    };

    const handleBorrarTarea = () => {
        fetch(`https://playground.4geeks.com/todo/todos/${tarea.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => {
            if (res.ok) {
                borrarTarea(tarea.id);
            } else {
                console.error("Error al eliminar la tarea");
            }
        })
        .catch(error => console.error("Error al eliminar la tarea:", error));
    };



    return (
        <li className="lista-tareas__tarea">
            <FontAwesomeIcon 
                icon={tarea.is_done ? faCheckSquare : faSquare} 
                className="lista-tareas__icono lista-tareas__icono-check"
                onClick={handleToggleCompletada} 
            />
            <div className="lista-tareas__texto">
                {editandoTarea ?
                <form className="formulario-editar-tarea" onSubmit={handleSutmit}>
                    <input 
                        className="formulario-editar-tarea__input" 
                        type="text"
                        value={nuevaTarea}
                        onChange={(e) => { setCambiarNuevaTarea(e.target.value) }}
                        >
                    </input>
                    <button className="formulario-editar-tarea__btn">Actualizar</button>
                </form> 
                :
                tarea.label   
            }
            </div>
            <div className="lista-tareas__contenedor-botones">
                <FontAwesomeIcon
                    icon={faEdit}
                    className="lista-tareas__icono lista-tareas__icono__accion"
                    onClick={() => { setEditandoTarea(!editandoTarea) }}
                />
                <FontAwesomeIcon
                    icon={faTrash}
                    className="lista-tareas__icono lista-tareas__icono__accion"
                    onClick={handleBorrarTarea}
                />
            </div>
        </li>
    );
};

export default Tarea;