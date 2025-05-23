import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Results.css";

export default function Results(props) {


    if (props.results) {
        return (
            <div className="Results">
                <div className="Results-guide">
                    <h2>{props.results.word}</h2>
                    <Phonetic phonetic={props.results.phonetic}/>
                </div>
               <div className="Results-definition">
                    {props.results.meanings.map(function(meaning, index){
                        return (
                            <div key={index}>
                                <Meaning meaning={meaning}/>
                            </div>
                        );
                    })}
               </div>
            </div>
        )
    } else {
        return null;
    }
    
}