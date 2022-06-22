import React from 'react';

const VideosList = (props) => {
    if(Object.keys(props.videos).length){
        let result = [];

        for(var index=1; index<Object.keys(props.videos).length; index++){
            result.push(<div className="card mb-4" onClick={props.changePlayback} data-video-index={index}>
                    <img src={props.videos[index].snippet.thumbnails.high.url} className="card-img-top" alt={props.videos[index].snippet.thumbnails.high.url}/>
                    <div className="card-body bg-dark text-light">
                        <p className="card-text" dangerouslySetInnerHTML={{__html: props.videos[index].snippet.title}}></p>
                    </div>
                </div>
            );
        }
        return result
    }
};

export default VideosList;