import useMercado from "../hooks/useMercado"
import { Link } from "react-router-dom";
const ResultadoMercado = () => {
    
    const { resultado } = useMercado()

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
            <p>
            Ver liga Mercado: <Link type='button' to={'editar/'+kelvin}>{main.temp}</Link>
            </p>

            
            
        </div>
    )
}

export default ResultadoMercado
