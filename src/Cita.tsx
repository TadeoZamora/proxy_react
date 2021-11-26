import { Box } from '@mui/system';
import React, {useState}  from 'react';
import BasicDatePicker from './components/BasicDatePicker';
import InputForm from './components/InputForm';

export interface ICita{
    fecha : Date,
    hora : string, //HH:MM
    lugar : string,
    personas : number,
    usuario : number | null
}

interface ICitaProps{
    agregar_valor_a_cita : ( name : string, value : any ) => void
}

const Cita = ( props : ICitaProps ) => {

    return (
        <Box>
            <Box sx={{marginBottom : 2}}>
                <BasicDatePicker />
            </Box>
            <InputForm 
                label="Hora" 
                name="hora" 
                type="text" 
                placeholder="Selecciona la hora de tu cita"
                obtener_valor={props.agregar_valor_a_cita}
            />
            <InputForm 
                label="Lugar de la cita"
                name="lugar" 
                type="text" 
                placeholder="Escribe el lugar"
                obtener_valor={props.agregar_valor_a_cita}
            />
            <InputForm 
                label="Personas a asistir"
                name="personas" 
                type="number" 
                placeholder="¿Cuantas personas asistirán?"
                obtener_valor={props.agregar_valor_a_cita}
            />
        </Box>
    );
};

export default Cita;