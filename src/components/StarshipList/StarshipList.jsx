import React from 'react';
import StarshipCard from '../StarshipCard/StarshipCard';

const StarshipList = ({ starships }) => {
    return (
        <ul>
            {starships.map((starship, index) => {
                return (
                    <StarshipCard
                      key={index}
                      starship={starship}                  
                    />
                )
            })}
        </ul>
    )
}


export default StarshipList;