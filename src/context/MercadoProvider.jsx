import { useState, createContext } from "react";
import axios from 'axios'

const MercadoContext = createContext()

const MercadoProvider = ({children}) => {

    const [busqueda, setBusqueda] = useState({
        ciudad: '',
        pais: ''
    })

    const [resultado, setResultado] = useState({})

    const datosBusqueda = e =>{
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

    const consultarClima = async datos => {
        try{
            const { ciudad, pais} = datos

            const appId = import.meta.env.VITE_API_KEY
            
            const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${appId}`

            
            const { data } = await axios(url)
            const { lat, lon } = data[0]
            
            const urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`

            const { data: clima } = await axios(urlClima)
            setResultado(clima)

        }catch (error) {
            console.log(error)
        }
    }

    return (
        <MercadoContext.Provider 
        value={{busqueda, 
            datosBusqueda,
            consultarClima,
            resultado
        }}
        >
            {children}
        </MercadoContext.Provider>
    )
}

export {
    MercadoProvider
}

export default MercadoContext
