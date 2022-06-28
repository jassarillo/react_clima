import useMercado from "../hooks/useMercado"
import { Link } from "react-router-dom";
const ResultadoMercado = () => {
    
    const { resultado } = useMercado()
    
  

    const { paging, results,   query, site_id } = resultado


    return (
        <>
            <h2>El clima de es{} </h2> 
                 
               

        {/*results.map((rr) =>
                <div key={rr.title}>
                    key={rr.title}
                </div>
        )*/}

        {results.map((rr) =>
            <div  key={rr.id} role="presentation" className="slick-list">      
                <div key={rr.id} className="slick-track">
                    <div key={rr.id} data-index="0" className="slick-slide slick-active" tabIndex="-1" > 
                                key={rr.title}
                                <img key={rr.id} width="160" height="160"
                                        src={rr.thumbnail}
                                        className="ui-search-result-image__element" alt="Aprendiz De Caballero 2
                                        Una Yegua Llamada Dora * Edelvives">
                                </img>
                    </div>
                </div>
            </div>    





            /*
            	<div  key={rr.id} class="ui-search-result__image">
                    <a
                    href="https://articulo.mercadolibre.com.ar/MLA-904839279-aprendiz-de-caballero-2-una-yegua-llamada-dora-edelvives-_JM#position=1&amp;search_layout=stack&amp;type=item&amp;tracking_id=4721de6d-03f7-48ea-a629-7c2a7c1a512c"
                    class="ui-search-link" 
                    title="Aprendiz De Caballero 2 Una Yegua
                    Llamada Dora * Edelvives">
                        <div  key={rr.id} class="carousel-container
                        arrow-visible">
                            <div  key={rr.id} class="slick-initialized slick-slider">
                                <div  key={rr.id} role="presentation" class="slick-list">
                                    <div  key={rr.id} class="slick-track"
                                    style="opacity: 1; transform: translate3d(0px, 0px, 0px); width:
                                    480px;">
                                        <div  key={rr.id} data-index="0" class="slick-slide slick-active"
                                        tabindex="-1" style="width: 160px;">
                                            <img width="160" height="160"
                                            src="https://http2.mlstatic.com/D_NQ_NP_773978-MLA46959020166_082021-V.webp"
                                            class="ui-search-result-image__element" alt="Aprendiz De Caballero 2
                                            Una Yegua Llamada Dora * Edelvives">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            */



              )}
            
            
        </>
    )
}

export default ResultadoMercado
