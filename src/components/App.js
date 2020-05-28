import React from 'react';
import axios from 'axios';
import Search from './Search';

class App extends React.Component {
    state = { location: '' };

    onSearchSubmit(term) {
        axios.get('http://api.weatherapi.com/v1/forecast.json', {
            params: {
                key: 'cfb5e6d9acd0434f874112648202805',
                query: term,
                days: 3
            },

        });
    }

    render() {
        return (
            <div>
                <Search onSubmit={this.onSearchSubmit} />
            </div>
        );
    }
}

export default App;