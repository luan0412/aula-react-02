import React from "react";

export default function Carta(props){ //Atividade de props
    return(

        <section>
            <h2>Olá {props.remetente} - {props.destino}</h2>
            <p>Estou escrevendo essa carta por causa da  </p>
            <p> atividade que os alunos vão fazer, okay.</p>
            <p>Não desiste, continue fazendo as atividades, treinando e praticando.</p>
            <p>O céu é o limite !</p>
        
         </section>


    )
}