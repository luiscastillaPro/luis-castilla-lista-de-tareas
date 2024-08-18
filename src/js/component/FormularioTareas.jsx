import React, { useState } from "react";

const FormularioTareas = ({ listaTareas, setListaTareas }) => {
    const [inputTarea, setInputTarea] = useState("");

    const handleInputChange = (e) => setInputTarea(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (inputTarea.trim() === "") return;
    
        try {
            const res = await fetch("https://playground.4geeks.com/todo/todos/luis_castilla", {
                method: "POST",
                body: JSON.stringify({ 
                    label: inputTarea.trim(),
                    is_done: false
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            });
    
            const data = await res.json();
            setListaTareas([...listaTareas, data]);
        } catch (error) {
            console.error("Error al cargar la lista:", error);
        }
    
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