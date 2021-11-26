import React, {useState}  from 'react';
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
        <div>
            <InputForm 
                label="Fecha de la cita" 
                name="fecha" 
                type="date" 
                placeholder="Selecciona la fecha de tu cita"
                obtener_valor={props.agregar_valor_a_cita}
            />
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
        </div>
    );
};

export default Cita;