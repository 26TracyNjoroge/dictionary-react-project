import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {
    const [keyword, setKeyword] = useState("");

    function handleResponse(response) {
        console.log(response.data.meanings[0])
    }

    function search(event) {
        event.preventDefault();
        alert(`Searching for ${keyword}`)

        let apiKey = "db90o24154efb0eb442t9a7ef39fdafd";
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    return (
        <div className="Dictionary text-center">
            <form onSubmit={search}>
                <input type="search" onChange={handleKeywordChange}/>
            </form>
        </div>
    )
}