import React, {useEffect, useState} from "react";
import Header from "./Header";
import FormularioTareas from "./FormularioTareas";
import ListaTareas from "./ListaTareas";

const App = () => {   
    const [listaTareas, setListaTareas] = useState([]);
    const [mostrarCompletadas, setCambiarMostrarCompletadas] = useState(false);

    useEffect(()=>{
        fetch("https://playground.4geeks.com/todo/users/luis_castilla")
            .then(res=>res.json())
            .then(data=>setListaTareas(data.todos))
            .catch(error => console.error("Error al cargar la lista:", error));
    },[])

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