import { useState } from "react";
import './StarshipSearch.css'

const StarshipSearch = ({ onSearch, onReset, lastQuery, resultCount }) => {
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(query);
        setQuery('');
    };

    return (
        <section className="search-section">
            <h2 className="typing-header">Starship Search Started</h2>
            <div className="search-meta">
              <p>Results: {resultCount}</p>
              <p>{lastQuery ? `Last search: ${lastQuery}` : `Search starships`}</p>
            </div>
            <form className="search-form" onSubmit={handleSubmit}>
                <label htmlFor="starship" >Search Term: </label>
                <div className="search-container">
                    <input 
                    id="starship"
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Type Key Terms"
                    />
                    <button type="submit">Search</button>
                </div>
            {lastQuery && (
                <button onClick={onReset}> 
                   Show All Starships
                </button>
            )}
            </form>
        </section>
    );
};

export default StarshipSearch;