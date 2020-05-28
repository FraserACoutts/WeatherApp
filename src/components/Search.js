import React from 'react';

class SearchLocation extends React.Component {
    state = { term: '' };

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state.term);
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