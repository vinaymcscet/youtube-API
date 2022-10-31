import React from 'react';

const VideoDetail = ({ video }) => {
    if (!video) {
        return <div>Loading...</div>
    }
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
        <div>
            <div className='ui embed'>
            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/mHOQ0xpqcyw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
            <iframe title={'video player'} src={videoSrc} />
            </div>
            <div className="ui segment">
                <h4 className='ui header'>{video.snippet.title}</h4>
                <p className="description">{video.snippet.description}</p>
            </div>
        </div>
    );
};

export default VideoDetail;