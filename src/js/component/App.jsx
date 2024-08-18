import React, { useEffect, useState } from "react";
import Header from "./Header";
import FormularioTareas from "./FormularioTareas";
import ListaTareas from "./ListaTareas";
import Footer from "./Footer";

const App = () => {
    const [listaTareas, setListaTareas] = useState([]);
    const [mostrarCompletadas, setCambiarMostrarCompletadas] = useState(false);
    const usuario = "luis_castilla";

    useEffect(() => {
        const cargarTareas = async () => {
            try {
                const res = await fetch(`https://playground.4geeks.com/todo/users/${usuario}`);
                if (!res.ok) {
                    throw new Error("Usuario no encontrado");
                }
                const data = await res.json();
                setListaTareas(data.todos);
            } catch (error) {
                console.error("Error al cargar la lista:", error);
                crearUsuario();
            }
        };

        const crearUsuario = async () => {
            try {
                const res = await fetch(`https://playground.4geeks.com/todo/users/${usuario}`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify([])
                });
                if (res.ok) {
                    console.log(`Usuario ${usuario} creado exitosamente`);
                    cargarTareas();
                } else {
                    console.error("Error al crear el usuario");
                }
            } catch (error) {
                console.error("Error al crear el usuario:", error);
            }
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
            <Footer
                listaTareas={listaTareas}
                setListaTareas={setListaTareas}
            />
        </div>
    );
};

export default App;