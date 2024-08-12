import React, { useState } from "react";

const FormularioTareas = ({ listaTareas, setListaTareas }) => {
    const [inputTarea, setInputTarea] = useState("");

    const handleInputChange = (e) => setInputTarea(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputTarea.trim() === "") return;

        setListaTareas([...listaTareas,
            { 
                id: Date.now(),
                texto: inputTarea.trim(),
                completada: false 
            }
        ]);

        setInputTarea("");
    };

    return (
        <form className="formulario-tareas" onSubmit={(e)=>{handleSubmit(e)}}>
            <input
                className="formulario-tareas__input"
                type="text"
                placeholder="Escribe una tarea"
                value={inputTarea}
                onChange={(e)=>{handleInputChange(e)}} 
            />
        </form>
    );
};

export default FormularioTareas;