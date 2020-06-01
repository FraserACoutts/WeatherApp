import React from 'react';

const CurrentTemp = ({ current, location, forecasts, date }) => {
    console.log(current);
    console.log(location);
    console.log(forecasts);

    const image = forecasts.map((forecast) => {
        return (
            <div>
                <img alt={forecast.text} key={forecast.date_epoch} src={forecast.day.condition.icon} />
                <p>{forecast.day.condition.text}</p>
            </div>
        );
    });

    return (
        <div>
            <div>
                <h1>{location.name} {location.country}</h1>
                {date}
            </div>
            <div>
                {image[0]}
                <p>Current Temp {current.temp_c}</p>
            </div>
        </div>
    );
};

export default CurrentTemp;