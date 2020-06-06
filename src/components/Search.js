import React from 'react';
import './Search.css';

class SearchLocation extends React.Component {
    state = { term: '' };

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state.term);
    };

    render() {
        return (
            <div className="search-form">
                <h1 className="header-title">Weather Search</h1>
                <form className="form" onSubmit={this.onFormSubmit}>
                    <input
                        className="input"
                        placeholder="Enter town, city or postcode to find a location."
                        type="text"
                        value={this.state.term}
                        onChange={(e) => this.setState({ term: e.target.value })}
                    />
                    <button>Search</button>
                </form>
            </div>
        );
    }
}

export default SearchLocation;