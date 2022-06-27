import useClima from "../hooks/useClima"
const Resultado = () => {
    
    const { resultado } = useClima()

    const kelvin = 273.1

    const { name, main } = resultado
    return (
        <div className="contenedor">
            <h2>El clima de {name} es{} </h2>
            <p >
                { parseInt(main.temp - kelvin)} <span>&#x2103;</span>
            </p>
            <p>
                 Máxima { parseInt(main.temp_max - kelvin)} <span>&#x2103;</span>
            </p>
            <p>
                 Mínima { parseInt(main.temp_min - kelvin)} <span>&#x2103;</span>
            </p>

            
            
        </div>
    )
}

export default Resultado
