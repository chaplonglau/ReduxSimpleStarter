import React from 'react';
import VideoListItem from './video_list_item';

//over here props is an array of 5 video objects
const VideoList = (props) => {
    const videoItems = props.videos.map((video)=> {
      return (
        <VideoListItem
          onVideoSelect={props.onVideoSelect}
          key={video.etag}
          video={video} />
      )
    });

    return (
      <ul className="col-md-4 list-group">
        {videoItems}
      </ul>
    );
};

export default VideoList
