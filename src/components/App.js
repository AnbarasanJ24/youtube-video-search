import React from 'react';
import './scss/App.scss';
import SearchBar from './SearchBar';

class App extends React.Component {

    onSearchSubmit(searchTerm) {
        console.log(searchTerm)
    }

    render() {
        return (
            <div className="container">
                <div className="container__main">
                    <div className="container__search">
                        <SearchBar onSearchSubmit={this.onSearchSubmit} />
                    </div>
                    <div className="container__video">
                        <div className="container__videoPlayer">
                            Video Player
                        </div>
                        <div className="container__description">
                            Video Description
                        </div>
                        <div className="container__videoList">
                            Video List
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default App;