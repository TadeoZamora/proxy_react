import { TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
interface InputProps{
    label : string,
    type : string,
    className? : string, //no es un campo obligatorio
    placeholder : string,
    obtener_valor : ( name : string, value : any ) => void,
    name : string
}
const InputForm = ( props : InputProps ) =>{
    return(
        <Box sx={{
            width: 500,
            maxWidth: '100%',
            marginBottom : 2
        }} >
            <TextField 
                label={props.label}
                fullWidth
                size="small"
                type={props.type} 
                name={props.name}
                className={props.className} 
                placeholder={props.placeholder} 
                onChange = { (evento) => props.obtener_valor( props.name, evento.target.value ) } />
                {/* evento es nuestro elemento HTML/JSX el cual tiene sus propiedades dentro de target */}
        </Box>
    )
}

export default InputForm;