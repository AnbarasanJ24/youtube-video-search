import React from 'react';
import './VideoDescription.scss';

const VideoDescription = ({ video }) => {
    let title = '';
    let description = ''
    if (video) {
        title = video.snippet.title;
        description = video.snippet.description;
    }
    return (
        <div className="VideoDescription">
            <h1 className="VideoDescription__title">{title}</h1>
            <h2 className="VideoDescription__description">{description}</h2>
        </div>

    )
}

export default VideoDescription;