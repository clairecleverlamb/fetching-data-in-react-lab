const show = async () => {
    try{
        const res = await fetch('https://swapi.dev/api/starships/');
        if (!res.ok) {
          throw new Error('Failed to fetch starships.');
        }
        const data = await res.json();
        return data.results;
    } catch(error) {
        console.log(error);
    }
};

export { show }; 