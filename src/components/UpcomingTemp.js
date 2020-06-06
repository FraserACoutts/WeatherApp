import React from 'react';
import moment from 'moment';
import './UpcomingTemp.css';

const UpcomingTemp = ({ forecasts }) => {

    const image = forecasts.map((forecast) => {
        return (
            <div>
                <p className="upcoming-date">{moment(forecast.date).format('ddd')}</p>
                <img alt={forecast.text} key={forecast.date_epoch} src={forecast.day.condition.icon} />
                <p className="upcoming-avgtemp">{Math.floor(forecast.day.avgtemp_c)} <span>&deg;C</span></p>
            </div>
        );
    });

    return (
        <div className="upcoming-temp">
            <div>
                {image[1]}
            </div>
            <div>
                {image[2]}
            </div>
        </div>
    );
};

export default UpcomingTemp;