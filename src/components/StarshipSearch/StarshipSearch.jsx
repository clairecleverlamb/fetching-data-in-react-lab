import { useState } from "react";

const StarshipSearch = ({ onSearch, onReset, lastQuery, resultCount }) => {
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(query);
        setQuery('');
    };

    return (
        <section>
            <h2>Search</h2>
            <p>Results: {resultCount}</p>
            <p>{lastQuery ? `Last search: ${lastQuery}` : `Search for a starship.`}</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="starship">Search Term: </label>
                <input 
                   id="starship"
                   type="text"
                   value={query}
                   onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit">Search Term</button>
                {lastQuery && (
                  <button onClick={onReset}> 
                    Show All Starships
                  </button>
                )}
            </form>
        </section>
    )
}

export default StarshipSearch;