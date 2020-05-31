import React from 'react';

const LocationList = (props) => {
    console.log(props.days);

    const days = props.days.map(({ day, date }) => {
        return (
            <div key={date}>
                <h2>{date}</h2>
                <img alt={day.condition.text} src={day.condition.icon} />
                <h3>{day.condition.text}</h3>
            </div>
        );
    });

    return <div>{days}</div>;
};

export default LocationList;