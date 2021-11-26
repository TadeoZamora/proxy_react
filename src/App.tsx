import React, { useState, useEffect } from 'react';
import Cita,{ ICita } from './Cita';
import './css/inicio.css'
import Usuario, { IUsuario } from './Usuario';
import * as UsuarioApi from './api/UsuariosAPI'
import * as CitaApi from './api/CitaAPI'

function App() {
  const [ usuario, setUsuario ] = useState<IUsuario>({
    nombre : "",
    correo : "",
    telefono : ""
  }) //objeto

  const [ datosCita, setDatosCita ] = useState<ICita>({
    fecha : new Date(),
    hora : '',
    lugar : '',
    personas : 0,
    usuario : null
  })

  useEffect(()=>{
    //Ejecuta tu codigo "X"
    const crearCita = async () =>{
      const response2 = await CitaApi.CrearCita(datosCita)
    }
    if(datosCita.usuario !== null){
      crearCita()
    }
  },[datosCita.usuario])

  const agregar_valor_a_estado = ( name : string, value : any ) =>{
    setUsuario({
      ...usuario, //evitamos que los nuevos cambios no afecten a los anteriores
      [name] : value
    })
  }

  const agregar_valor_a_cita = ( name : string, value : any ) =>{
    setDatosCita({
        ...datosCita,
        [name] : value
    })
}

  const guardar = async () => {
    try {
      const response1 = await UsuarioApi.CrearUsuario(usuario)
      setDatosCita({
        ...datosCita,
        usuario : response1.data.id
      })
    } catch (error : any) {
      alert(error.message)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        Agenda tu cita!
      </header>
        <Usuario agregar_valor_a_estado={agregar_valor_a_estado} />
      <hr />
        <Cita agregar_valor_a_cita={agregar_valor_a_cita} />
      <hr />
      <button onClick={() => guardar()}>Guardar</button>
    </div>
  );
}

export default App;
