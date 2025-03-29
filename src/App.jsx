import { useEffect, useState } from 'react';
import * as starshipService from './services/starshipService';
import StarshipSearch from './components/StarshipSearch/StarshipSearch';
import StarshipList from './components/StarshipList/StarshipList';



const App = () => {
  const [starshipData, setStarshipData] = useState([]);
  const [displayedStarships, setDisplayedStarships] = useState([]);
  const [lastQuery, setLastQuery] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try{
      const data = await starshipService.show();
      setStarshipData(data);
      setDisplayedStarships(data);
      setLoading(false);
    } catch (error){
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (query) => {
    const filtered = starshipData.filter((s) => 
      s.name.toLowerCase().includes(query.toLowerCase())
    );
    setDisplayedStarships(filtered);
    setLastQuery(query);
  }

  const handleReset = () => {
    setDisplayedStarships(starshipData);
    setLastQuery('');
  }

  return (
    <main>
      <h1>Star Wars API</h1>
      <StarshipSearch 
         onSearch={handleSearch}
         lastQuery={lastQuery}
         onReset={handleReset} 
         resultCount={displayedStarships.length}
      />
      <StarshipList 
        starships={displayedStarships} 
        loading={loading} />
    </main>
  );
}

export default App;