import React from 'react';
import axios from 'axios';
import moment from 'moment';
import Search from './Search';
import CurrentTemp from './CurrentTemp';

class App extends React.Component {
    state = { forecasts: [], location: [], current: [], date: [] };

    onSearchSubmit = async (term) => {
        const response = await axios.get('http://api.weatherapi.com/v1/forecast.json', {
            params: {
                key: 'cfb5e6d9acd0434f874112648202805',
                query: term,
                days: 3
            }
        });

        this.setState({
            forecasts: response.data.forecast.forecastday,
            location: response.data.location,
            current: response.data.current,
            date: moment().format('MMMM Do')
        });
    };

    render() {
        return (
            <div>
                <Search onSubmit={this.onSearchSubmit} />
                <CurrentTemp current={this.state.current} location={this.state.location} forecasts={this.state.forecasts} date={this.state.date} />
            </div>
        );
    }
}

export default App;