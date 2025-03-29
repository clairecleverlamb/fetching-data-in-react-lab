const StarshipCard = ({starship: { name, starship_class, manufacturer, model }}) => {
    return (
        <section>
          <div>
            <h3>{name}</h3>
            <p>Class: {starship_class}</p>
            <p>Manufacturer: {manufacturer}</p>
            <p>Model: {model}</p>
          </div>
        </section>
    );
};

export default StarshipCard;