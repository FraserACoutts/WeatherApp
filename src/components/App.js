import React from 'react';
import axios from 'axios';
import Search from './Search';

class App extends React.Component {
    state = { weather: [] };

    onSearchSubmit = async (term) => {
        const response = await axios.get('http://api.weatherapi.com/v1/forecast.json', {
            params: {
                key: 'cfb5e6d9acd0434f874112648202805',
                query: term,
                days: 3
            },
        });

        this.setState({ weather: response.data.forecast.forecastday });
    };

    render() {
        return (
            <div>
                <Search onSubmit={this.onSearchSubmit} />
                Found: {this.state.weather.length}
            </div>
        );
    }
}

export default App;