import React from 'react';

const LocationInfo = (props) => {
    console.log(props.location);

    return (
        <div>
            <div>
                <h2>{props.location.name} {props.location.country}</h2>
            </div>

        </div>
    );
};

export default LocationInfo;