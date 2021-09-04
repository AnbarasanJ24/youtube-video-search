import React from 'react';
import './VideoPlayer.scss';

const VideoPlayer = ({ video }) => {
    console.log("video", video)
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
        // <iframe  src="https://www.youtube.com/embed/M5QY2_8704o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    )
}

export default VideoPlayer;