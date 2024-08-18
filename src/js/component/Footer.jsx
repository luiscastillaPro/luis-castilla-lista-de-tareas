import React from "react";

const Footer = ({ listaTareas, setListaTareas }) => {

    const eliminarYRecrearUsuario = async () => {
        try {
            
            const resDelete = await fetch(`https://playground.4geeks.com/todo/users/luis_castilla`, {
                method: "DELETE"
            });

            if (!resDelete.ok) {
                throw new Error("Error al eliminar el usuario");
            }
            
            const resCreate = await fetch(`https://playground.4geeks.com/todo/users/luis_castilla`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify([]) 
            });

            if (resCreate.ok) {
                setListaTareas([]); 
            } else {
                throw new Error("Error al recrear el usuario");
            }
        } catch (error) {
            console.error("Error en el proceso de eliminar y recrear el usuario:", error);
        }
    };

    return (
        <div>
            <button onClick={eliminarYRecrearUsuario}>Eliminar todas las Tareas</button>
            <p className="contador">Tengo {listaTareas.length} tareas</p>
        </div>
    );
};

export default Footer;