import React, { useState } from "react";

const FormularioTareas = ({ listaTareas, setListaTareas }) => {
    const [inputTarea, setInputTarea] = useState("");

    const handleInputChange = (e) => setInputTarea(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputTarea.trim() === "") return;

        setListaTareas(
            [
            ...listaTareas,
            { 
                id: Date.now(),
                texto: inputTarea.trim() 
            }
        ]);

        setInputTarea("");
    };

    return (
        <form className="formulario-tareas" onSubmit={handleSubmit}>
            <input
                className="formulario-tareas__input"
                type="text"
                placeholder="Escribe una tarea"
                value={inputTarea}
                onChange={handleInputChange}
            />
        </form>
    );
};

export default FormularioTareas;