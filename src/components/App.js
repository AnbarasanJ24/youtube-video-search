import React from 'react';
import './scss/App.scss';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDescription from './VideoDescription';
import VideoPlayer from './VideoPlayer';

class App extends React.Component {

    state = { videos: [], selectedVideo: null }

    componentDidMount() {
        this.onSearchSubmit('Youtube');
    }


    getData = async (searchTerm) => {
        const reponse = await youtube.get('/search', {
            params: {
                q: searchTerm
            }
        })
        this.setState({
            videos: reponse.data.items,
            selectedVideo: reponse.data.items[0]
        })
        console.log(reponse.data.items);
    }


    debounce = (fn, sec) => {
        let timer;
        return function () {
            let context = this, args = arguments;
            clearTimeout(timer);
            timer = setTimeout(() => {
                fn.apply(context, args)
            }, sec);
        }
    }

    onSearchSubmit = this.debounce(this.getData, 300);

    onVideoSelect = (video) => {
        console.log("Selected video", video.snippet.title);
        this.setState({ selectedVideo: video })
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
                            <VideoPlayer video={this.state.selectedVideo} />
                        </div>
                        <div className="container__description">
                            <VideoDescription video={this.state.selectedVideo} />
                        </div>
                        <div className="container__videoList">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default App;
