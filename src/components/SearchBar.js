import React, { useState } from 'react';
import './SearchBar.scss'

const SearchBar = ({ onSearchSubmit }) => {

    const [term, setTerm] = useState('');

    const onInputChange = (event) => {
        setTerm(event.target.value);
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        onSearchSubmit(term);
    }

    return (
        <div className="search-container">
            <form onSubmit={onFormSubmit}>
                <input
                    value={term}
                    type="search"
                    placeholder="Search Videos"
                    name="videoSearch"
                    onChange={onInputChange}
                    id="videoSearch" />
            </form>
        </div>
    )
};

























// class SearchBar extends React.Component {

//     state = { term: '' }

//     onInputChange = (event) => {
//         this.setState({ term: event.target.value });
//         this.props.onSearchSubmit(event.target.value);
//     }


//     render() {
//         return (
//             <div className="search-container">
//                 <input
//                     value={this.state.term}
//                     type="search"
//                     placeholder="Search Videos"
//                     name="videoSearch"
//                     onChange={this.onInputChange}
//                     id="videoSearch" />
//             </div>
//         )
//     }

// }

export default SearchBar;