import React from 'react';

const CurrentTemp = ({ current, location, forecasts }) => {
    console.log(current);
    console.log(location);
    console.log(forecasts);

    const image = forecasts.map((forecast) => {
        return <img src={forecast.day.condition.icon} />;
    });

    return (
        <div>
            <h1>{location.name} {location.country}</h1>
            <p>{current.temp_c}</p>
            {image[0]}
        </div>
    );
};

export default CurrentTemp;