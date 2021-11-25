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
        <div style={{
            marginTop : 5
        }} >
            {/* input = campo/caja de texto */}
            <label>{props.label}</label>
            <input 
                type={props.type} 
                name={props.name}
                className={props.className} 
                placeholder={props.placeholder} 
                onChange = { (evento) => props.obtener_valor( props.name, evento.target.value ) } />
                {/* evento es nuestro elemento HTML/JSX el cual tiene sus propiedades dentro de target */}
        </div>
    )
}

export default InputForm;