import React, { useState, useEffect } from 'react';
import Cita,{ ICita } from './Cita';
import './css/inicio.css'
import Usuario, { IUsuario } from './Usuario';
import * as UsuarioApi from './api/UsuariosAPI'
import * as CitaApi from './api/CitaAPI'
import AppBarComponent from './components/AppBar';
import { Button, Grid } from '@mui/material';

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
    <>
    <Grid container>
      <Grid item xs={12} sx={{
        marginBottom : 10
      }}>
        <AppBarComponent titulo = "Agendar Cita" />
      </Grid>
      <Grid item xs={12} sx={{
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'center'
      }}>
        <Usuario agregar_valor_a_estado={agregar_valor_a_estado} />
      </Grid>
      <Grid item xs={12} sx={{
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'center'
      }}>
        <Cita agregar_valor_a_cita={agregar_valor_a_cita} />
      </Grid>
      <Grid item xs={12} sx={{
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'center'
      }}>
        <Button variant="contained" color="success" onClick={() => guardar()}>Guardar</Button>
      </Grid>
    </Grid>
    </>
  );
}

export default App;