import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import "./Dictionary.css";


export default function Dictionary(props) {
    const [keyword, setKeyword] = useState(props.defaultKeyword);
    const [results, setResults] = useState(null);
    const [loaded, setLoaded] = useState(false);

    function handleResponse(response) {
        setResults(response.data);
    }

    function search() {
        let apiKey = "db90o24154efb0eb442t9a7ef39fdafd";
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    function load() {
        setLoaded(true);
        search();
    }

    if (loaded) {
        return (
            <div className="Dictionary ">
                <h1 className="text-center mb-4">Dictionary App</h1>
                <h2 className="text-center">What word do you want to look up?</h2>
                <form onSubmit={handleSubmit} className="text-center">
                    <input type="search" onChange={handleKeywordChange} placeholder="Search word..." className="Dictionary-word"/>
                    <button type="submit" className="search-button">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="Dictionary-search" />
                    </button>
                    
                </form>
                <Results results={results}/>
            </div>
        )
    } else {
        load();
        return "Loading..";
    }

    
}