import React, { useState } from "react";
import Header from "./Header";
import FormularioTareas from "./FormularioTareas";
import ListaTareas from "./ListaTareas";

const App = () => {
    const [tareas, cambiarTareas] = useState([
        {
            id: 1,
            texto: "lavar ropa",
            completada: false
        },
        {
            id: 2,
            texto: "Grabar tutorial",
            completada: false
        }
    ]);

    return (
        <div className="contenedor">
            <Header />
            <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas} />
            <ListaTareas tareas={tareas} cambiarTareas={cambiarTareas} />
        </div>
    );
};

export default App;