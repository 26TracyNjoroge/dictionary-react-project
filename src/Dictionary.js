import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";

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
            <form onSubmit={search} className="text-center mb-4">
                <input type="search" onChange={handleKeywordChange} placeholder="Search word..." className="Dictionary-word"/>
                <input type="submit"value="🔍" className="Dictionary-search"/>
            </form>
            <Results results={results}/>
        </div>
    )
}