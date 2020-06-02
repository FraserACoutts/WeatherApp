import React from 'react';
import './CurrentTemp.css';

const CurrentTemp = ({ current, location, forecasts, date }) => {
    const image = forecasts.map((forecast) => {
        return (
            <div>
                <img alt={forecast.text} key={forecast.date_epoch} src={forecast.day.condition.icon} />
                <p>{forecast.day.condition.text}</p>
            </div>
        );
    });

    return (
        <div className="temp-details">
            <div>
                <h1>{location.name} {location.country}</h1>
                {date}
            </div>
            <div>
                {image[0]}
                <p>{current.temp_c}</p>
            </div>
        </div>
    );
};

export default CurrentTemp;