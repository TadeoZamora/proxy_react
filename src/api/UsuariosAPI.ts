import { IUsuario } from './../Usuario';

export const CrearUsuario = async ( params : IUsuario ) =>{
    const url = 'http://localhost:5000/api/usuario/'

    const respuesta = await fetch(`${url}crear`, {
        method: "POST",
        headers: {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify( params )
    });

    if (!respuesta.ok) {
        let message = await respuesta.json()
        throw new Error(message)
    }
    
    if (respuesta.status !== 204){
        return respuesta.json() // { message, data }
    }
    
    throw new Error("Error Interno")
}

export const ObtenerUsuario = () =>{
    return
}