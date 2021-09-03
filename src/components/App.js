import React from 'react';
import './scss/App.scss';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';

class App extends React.Component {

    state = { videos: [] }

    onSearchSubmit = async (searchTerm) => {
        const reponse = await youtube.get('/search', {
            params: {
                q: searchTerm
            }
        })
        console.log(reponse.data.items);
        this.setState({ videos: reponse.data.items })
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
                            <VideoList videos={this.state.videos} />
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default App;
