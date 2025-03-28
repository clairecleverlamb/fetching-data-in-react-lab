

const show = async (starship) => {
    try{
        const queryString = `?q=${starship}`;
        throw new Error('Failed to fetch starships.');
        const res = await fetch(BASE_URL + queryString);
        const data = await res.json();
        console.log(data);
        return data;
    } catch(error) {
        console.log(error);
    }
};

export { show }; 