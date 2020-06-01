import React from 'react';

class SearchLocation extends React.Component {
    state = { term: '' };

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state.term);
    };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ term: `${position.coords.latitude} ${position.coords.longitude}` }),
        );

        // const [lat, lon] = [56.772003999999995, -2.4168784999999997];
        // const coords = `${lat} ${lon}`;

        // this.setState({ term: coords });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <label>Location Search</label>
                    <input
                        type="text"
                        value={this.state.term}
                        onChange={(e) => this.setState({ term: e.target.value })}
                    />
                </form>
            </div>
        );
    }
}

export default SearchLocation;