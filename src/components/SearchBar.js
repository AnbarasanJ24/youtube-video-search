import React from 'react';
import './SearchBar.scss'

class SearchBar extends React.Component {

    state = { term: '' }

    onInputChange = (event) => {
        this.setState({ term: event.target.value });
        this.props.onSearchSubmit(event.target.value);
    }


    render() {
        return (
            <div className="search-container">
                <input
                    value={this.state.term}
                    type="search"
                    placeholder="Search Videos"
                    name="videoSearch"
                    onChange={this.onInputChange}
                    id="videoSearch" />
            </div>
        )
    }

}

export default SearchBar;