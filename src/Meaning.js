import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
    // console.log(props.meaning);

    return (
       <div className="Meaning">
            <h4>{props.meaning.partOfSpeech}</h4>
            <div className="definition-example">
                <p className="definition">{props.meaning.definition}</p>
                <p className="example"><em>{props.meaning.example}</em></p>
            </div>

            <section>
                <Synonyms synonyms={props.meaning.synonyms}/>
            </section>
        </div>
    )
};