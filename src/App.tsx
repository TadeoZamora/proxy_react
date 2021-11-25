import React, { useState } from 'react';
import InputForm from './components/InputForm'
import './css/inicio.css'

interface IUsuario{
  nombre? : string,
  correo? : string,
  telefono? : string
}

function App() {
  const [ usuario, setUsuario ] = useState<IUsuario>({
    nombre : "",
    correo : "",
    telefono : ""
  }) //objeto

  const agregar_valor_a_estado = ( name : string, value : any ) =>{
    setUsuario({
      ...usuario, //evitamos que los nuevos cambios no afecten a los anteriores
      [name] : value
    })
  }

  return (
    <div className="App">
        <header className="App-header">
          Agenda tu cita!
        </header>
          <InputForm 
            name="nombre" 
            label="Nombre: " 
            placeholder="Ingrese su nombre" 
            type="text"
            obtener_valor={agregar_valor_a_estado}
          />
          <InputForm name="correo" label="Correo: " placeholder="Ingrese su correo" type="text" obtener_valor={agregar_valor_a_estado} />
          <InputForm name="telefono" label="Telefono: " placeholder="Ingrese su telefono" type="number" obtener_valor={agregar_valor_a_estado} />
          <p>{usuario.nombre}</p>
      <hr />
    </div>
  );
}

export default App;
