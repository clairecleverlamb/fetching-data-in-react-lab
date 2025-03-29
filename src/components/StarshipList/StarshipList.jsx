import './StarshipList.css';
import StarshipCard from '../StarshipCard/StarshipCard';

const StarshipList = ({ starships, loading }) => {
    if (loading) return <p className='loading'>Loading...</p>;
    if (starships.length === 0) return <p className='no-results'>No starships found.</p>
    return (
        <ul>
            {starships.map((starship) => {
                return (
                    <StarshipCard
                      key={starship.name}
                      starship={starship}                  
                    />
                )
            })}
        </ul>
    );
};


export default StarshipList;