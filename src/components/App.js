import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';

import './App.css';

const App = () => {

  const [selectedVideo, setSelectedvideo] = useState(null);
  const [videos, search] = useVideos('buildings');

  useEffect(() => {
    setSelectedvideo(videos[0]);
  }, [videos]);

  return (
    <div className='ui container'>
      <SearchBar onFormSubmit={search} />
      {/* I have {videos.length} videos. */}
      <div className='ui grid'>
        <div className="ui row">
          <div className='eleven wide column'>
            <VideoDetail video={selectedVideo} />
          </div>
          <div className='five wide column'>
            <VideoList
              onVideoSelect={setSelectedvideo}
              videos={videos}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
