import React, {useEffect, useState} from "react";
import Header from "./Header";
import FormularioTareas from "./FormularioTareas";
import ListaTareas from "./ListaTareas";

const App = () => {   
    const [listaTareas, setListaTareas] = useState([]);
    const [mostrarCompletadas, setCambiarMostrarCompletadas] = useState(false);
    const usuario = "luis_castilla"; 

    
    useEffect(() => {
        const cargarTareas = () => {
            fetch(`https://playground.4geeks.com/todo/users/${usuario}`)
                .then(res => {
                    if (res.ok) {
                        return res.json();
                    } else {
                        throw new Error("Usuario no encontrado");
                    }
                })
                .then(data => setListaTareas(data.todos))
                .catch(error => {
                    console.error("Error al cargar la lista:", error);
                    crearUsuario(); 
                });
        };

        const crearUsuario = () => {
            fetch(`https://playground.4geeks.com/todo/users/${usuario}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify([])
            })
            .then(res => {
                if (res.ok) {
                    console.log(`Usuario ${usuario} creado exitosamente`);
                    cargarTareas(); 
                } else {
                    console.error("Error al crear el usuario");
                }
            })
            .catch(error => console.error("Error al crear el usuario:", error));
        };

        cargarTareas();
    }, []);

    return (
        <div className="contenedor">
            <Header 
            mostrarCompletadas={mostrarCompletadas} 
            setCambiarMostrarCompletadas={setCambiarMostrarCompletadas} 
            />
            <FormularioTareas 
            listaTareas={listaTareas} 
            setListaTareas={setListaTareas} 
            />
            <ListaTareas 
            listaTareas={listaTareas} 
            setListaTareas={setListaTareas}
            mostrarCompletadas={mostrarCompletadas}
            />
            <p className="contador"> tengo {listaTareas.length} tareas</p>
        </div>
    );
};

export default App;