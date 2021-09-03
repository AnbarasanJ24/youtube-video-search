import React from 'react';
import './VideoItem.scss';

const VideoItem = ({ video }) => {
    const { title, thumbnails } = video.snippet;
    return (
        <div className="videoCard">
            <div className="videoCard__image">
                <img src={thumbnails.medium.url} alt="thumbnails" />
            </div>
            <div className="videoCard__title">
                {title}
            </div>
        </div>
    )
}

export default VideoItem;