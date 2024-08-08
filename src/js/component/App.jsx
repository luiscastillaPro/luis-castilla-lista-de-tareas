import React, { useState } from "react";
import Header from "./Header";
import FormularioTareas from "./FormularioTareas";
import ListaTareas from "./ListaTareas";

const App = () => {
    const [listaTareas, setListaTareas] = useState(
        [
            { 
                id: 1, 
                texto: "Lavar ropa" 
            },
            { 
                id: 2,
                texto: "Grabar tutorial" 
            },
        ]
    );

    return (
        <div className="contenedor">
            <Header />
            <FormularioTareas listaTareas={listaTareas} setListaTareas={setListaTareas} />
            <ListaTareas listaTareas={listaTareas} setListaTareas={setListaTareas} />
        </div>
    );
};

export default App;