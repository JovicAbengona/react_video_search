import React from 'react';

const Playback = (props) => {
    if(Object.keys(props.video).length){
        return <>
            <div className="ratio ratio-16x9">
                <iframe src={`https://www.youtube.com/embed/${props.video.id.videoId}?autoplay=1`} title={props.video.snippet.title} allowFullScreen></iframe>
            </div>
            <h1 className="text-light mt-2" dangerouslySetInnerHTML={{__html: props.video.snippet.title}}></h1>
            <p className="text-muted" dangerouslySetInnerHTML={{__html: props.video.snippet.description}}></p>
        </>
    }
};

export default Playback;