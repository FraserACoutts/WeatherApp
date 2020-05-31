import React from 'react';

const CurrentTemp = ({ current, location, forecasts }) => {
    console.log(current);
    console.log(location);

    return (
        <div>
            <h1>{location.name} {location.country}</h1>
            <p>{current.temp_c}</p>
        </div>
    );
};

export default CurrentTemp;