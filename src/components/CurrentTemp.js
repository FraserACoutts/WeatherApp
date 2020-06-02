import React from 'react';
import './CurrentTemp.css';

const CurrentTemp = ({ current, location, forecasts, date }) => {

    console.log(current);

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
            <div className="weather-details">
                <div>{image[0]}</div>
                <div className="current-details">
                    <p>{current.temp_c} Celcius</p>
                    <p>{current.humidity} Humidity</p>
                    <p>{current.wind_mph} Wind Mph</p>
                </div>

            </div>
        </div>
    );
};

export default CurrentTemp;