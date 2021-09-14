import React from 'react';
import './VideoPlayer.scss';

const VideoPlayer = ({ video }) => {
    if (!video) {
        return <div>Loading...</div>
    }
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
        <iframe
            src={videoSrc}
            title="YouTube video player"
            width="560"
            height="315"
            className="iframe_video"
            frameBorder="0"></iframe>
    )
}

export default VideoPlayer;