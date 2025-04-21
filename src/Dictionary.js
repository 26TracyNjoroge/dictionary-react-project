import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


export default function Dictionary() {
    const [keyword, setKeyword] = useState("");
    const [results, setResults] = useState(null);

    function handleResponse(response) {
        setResults(response.data);
    }

    function search(event) {
        event.preventDefault();

        let apiKey = "db90o24154efb0eb442t9a7ef39fdafd";
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    return (
        <div className="Dictionary ">
            <h1 className="text-center mb-4">Dictionary App</h1>
            <form onSubmit={search} className="text-center">
                <input type="search" onChange={handleKeywordChange} placeholder="Search word..." className="Dictionary-word"/>
                <button type="submit" className="search-button">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="Dictionary-search" />
                </button>
                
            </form>
            <Results results={results}/>
        </div>
    )
}