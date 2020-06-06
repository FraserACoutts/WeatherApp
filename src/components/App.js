import React from 'react';
import axios from 'axios';
import moment from 'moment';
import Search from './Search';
import CurrentTemp from './CurrentTemp';
import UpcomingTemp from './UpcomingTemp';
import './Search.css';

class App extends React.Component {
    state = { forecasts: [], location: [], current: [], date: [], error: false };

    onSearchSubmit = async (term) => {
        try {
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
                date: moment().format('dddd MMM Do')
            });
        } catch (err) {
            this.setState({
                error: true
            });
        }
    };

    render() {
        return (
            <div className="main-content">
                <div className="main-content-items">
                    <Search className="search" onSubmit={this.onSearchSubmit} />
                    <CurrentTemp className="current-temp" current={this.state.current} location={this.state.location} forecasts={this.state.forecasts} date={this.state.date} error={this.state.error} />
                    <UpcomingTemp current={this.state.current} location={this.state.location} forecasts={this.state.forecasts} date={this.state.date} />
                </div>

            </div>
        );
    }
}

export default App;