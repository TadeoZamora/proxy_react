import { Box } from '@mui/system';
import React from 'react';
import InputForm from './components/InputForm';

interface IUsuarioProps{
    agregar_valor_a_estado : (name : string, value : any) => void
}
export interface IUsuario{
    nombre? : string,
    correo? : string,
    telefono? : string
}
const Usuario = (props : IUsuarioProps) => {
    return (
        <Box>
            <InputForm
                name="nombre" 
                label="Nombre: " 
                placeholder="Ingrese su nombre" 
                type="text"
                obtener_valor={props.agregar_valor_a_estado}
            />
            <InputForm name="correo" label="Correo: " placeholder="Ingrese su correo" type="text" obtener_valor={props.agregar_valor_a_estado} />
            <InputForm name="telefono" label="Telefono: " placeholder="Ingrese su telefono" type="number" obtener_valor={props.agregar_valor_a_estado} />
        </Box>
    );
};

export default Usuario;