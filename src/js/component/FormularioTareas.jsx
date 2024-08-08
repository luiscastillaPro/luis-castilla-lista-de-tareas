import React, {useState} from "react";
                                
const FormularioTareas = ({tareas,cambiarTareas}) => {
    const [inputTarea, CambiarInputTarea] = useState("");

    const handleInput = (e) => {
        CambiarInputTarea(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputTarea.trim() === "") return;

        cambiarTareas([...tareas,{
            id: Date.now(),
            texto: inputTarea,
            completada: false
        }])
        CambiarInputTarea("");
    };
    
	return (
		<form className="formulario-tareas" onSubmit={handleSubmit}>
            <input 
                type="text"
                className="formulario-tareas__input" 
                placeholder="Escribe una tarea"
                value={inputTarea}
                onChange={(e)=>{handleInput(e)}}
            />
        </form>
	);
};

export default FormularioTareas;