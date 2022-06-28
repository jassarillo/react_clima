import useMercado from "../hooks/useMercado"
import { Link } from "react-router-dom";
const ResultadoMercado = () => {
    
    const { resultado } = useMercado()
    
    //const kelvin = 273.1

    const { paging, results,   query, site_id } = resultado

    console.log(paging);
    console.log(results);
 
    /*
    const usersByLikes = results.map(item => {
        const container = {};
    
        container[item.naidme] = item.id;
       // container.age = item.name.length * 10;
    
       // return container;
    })
    
    console.log(usersByLikes);*/

    //console.log(results);
    //const newvar =JSON.parse(results);
    //const result_g = resultado.results
   // const results_array = []

    //results_array = results

    const sweetArray = [ "Sa", "aa", "ma", "ma", "ya" ]
    /*const sweeterArray = sweetArray.map(sweetItem => {
        return sweetItem * 2
    })*/



    
const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];
    return (
        <div className="contenedor">
            <h2>El clima de es{} </h2> 
                 
                { sweetArray.map(
                    (sw) => sw
                    )} 
               
       {posts.map((post) =>
                <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
                </div>
               )}
            
            
        </div>
    )
}

export default ResultadoMercado
