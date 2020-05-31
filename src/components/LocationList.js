import React from 'react';

const LocationList = (props) => {
    console.log(props.forecasts);

    // const forecast = props.forecasts.map(({ day, date }) => {
    //     return (
    //         <div key={date}>
    //             <h2>{date}</h2>
    //             <img alt={day.condition.text} src={day.condition.icon} />
    //             <h3>{day.condition.text}</h3>
    //         </div>
    //     );
    // });

    return <div>List</div>;

};

export default LocationList;