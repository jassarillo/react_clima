import  BuscadorForm  from "./BuscadorForm";
import ResultadoMercado from "./ResultadoMercado";
import useMercado from "../hooks/useMercado";


export const AppMercado = () => {
    const {resultado } = useMercado()
    return (
        <>
            <main className="dos-columnas">
            <BuscadorForm/>
            {resultado?.name && <ResultadoMercado/>}

            </main>
        </>
    )
}
