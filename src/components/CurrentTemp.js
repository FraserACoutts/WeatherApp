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
                {location.name && <h1>{location.name}, {location.country}</h1>}
                <div className="date">{date}</div>
            </div>
            <div className="weather-details">
                <div>{image[0]}</div>
                <div className="current-details">
                    <div>
                        {current.temp_c && <p>Temperature : {current.temp_c} <span>&deg;C</span></p>}
                    </div>
                    <div>
                        {current.humidity && <p>Humidity : {current.humidity}%</p>}
                    </div>
                    <div>
                        {current.wind_mph !== 0 ? current.wind_mph && <p>Wind : {current.wind_mph} mph</p> : <p>Wind : No Data</p>}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CurrentTemp;