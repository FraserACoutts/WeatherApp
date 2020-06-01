import React from 'react';
import axios from 'axios';
import Search from './Search';
import CurrentTemp from './CurrentTemp';

class App extends React.Component {
    state = { forecasts: [], location: [], current: [] };

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
            current: response.data.current
        });
    };

    render() {
        return (
            <div>
                <Search onSubmit={this.onSearchSubmit} />
                <CurrentTemp current={this.state.current} location={this.state.location} forecasts={this.state.forecasts} />
            </div>
        );
    }
}

export default App;