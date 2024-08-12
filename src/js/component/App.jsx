import React, {useState} from "react";
import Header from "./Header";
import FormularioTareas from "./FormularioTareas";
import ListaTareas from "./ListaTareas";

const App = () => {   
    const [listaTareas, setListaTareas] = useState(
        [
            {
                id: 1,
                texto: "lavar la ropa",
                completada: false
            },
            {
                id: 2,
                texto: "tender la cama",
                completada: false
            }
        ]
    );
    const [mostrarCompletadas, setCambiarMostrarCompletadas] = useState(false);
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