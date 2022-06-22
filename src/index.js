import React from "react";
import ReactDOM from "react-dom"
import Youtube from "./api/YoutubeAPI";
import SearchForm from "./components/SearchForm";
import Playback from "./components/Playback";
import VideosList from "./components/VideosList";
import "@popperjs/core";
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            search_text: "",
            videos_list: {},
            video_details: {}
        }
    }

    onSubmit = async (event) => {
        event.preventDefault();
        
        /* get search_text from this.state */
        let {search_text} = this.state
        
        /* fetch data using youtube api if search_text has value */
        if(search_text){
            const youtube_result = await Youtube.get("/search", {
                params: {
                    q: search_text
                }
            })

            /* Set value for this.state.videos_list and this.state.video_details */
            this.setState({
                videos_list: youtube_result.data.items,
                video_details: youtube_result.data.items[0]
            })
        }
    }

    onChange = async (event) => {
        event.preventDefault();
        
        /* Update value of this.state.search_text */
        this.setState({ search_text: event.target.value.trim() })
    }

    changePlayback = async (event) => {
        event.preventDefault();

        let video_index = event.currentTarget.getAttribute("data-video-index");
        let videos_list = this.state.videos_list
        let old_video   = this.state.video_details

        /* Update state of video_details */
        this.setState({ video_details: videos_list[video_index] });

        /* Remove from videos_list array */
        videos_list.splice(video_index, 1);

        /* Push old_video to videos_list */
        videos_list.push(old_video);

        /* Update videos_list state */
        this.setState({ videos_list: videos_list });
    }

    render() {
        return (
            <>
                <SearchForm onSubmit={this.onSubmit} onChange={this.onChange} />
                <div className="row m-0">
                    <div className="col-md-9 col-sm-12">
                        <Playback video={this.state.video_details} />
                    </div>
                    <div className="col-md-3 col-sm-12 overflow-auto" style={{ height: 830 }}>
                        <VideosList changePlayback={this.changePlayback} videos={this.state.videos_list} />
                    </div>
                </div>
            </>
        );
    };
};

ReactDOM.render(<App/>, document.querySelector("#root"));