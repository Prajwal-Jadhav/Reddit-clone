import React from "react";
import moment from "moment";
import ReactPlayer from "react-player";
import { Waypoint } from "react-waypoint";

export default class VideoPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = { shouldPlay: false };
  }

  handleEnter = () => {
    this.setState({ shouldPlay: true });
  };

  handleExit = () => {
    this.setState({ shouldPlay: false });
  };

  render() {
    const {
      ups,
      created_utc,
      subreddit_name_prefixed: subreddit,
      num_comments: comments,
    } = this.props.post;

    let m = new Date(created_utc * 1000);

    m = moment(m).fromNow();

    return (
      <div className="SimplePost post">
        <div className="upvote__bar">
          <i className="fas fa-arrow-up"></i>
          <div>{ups > 1000 ? (ups / 1000).toFixed(1) + "k" : String(ups)}</div>
          <i className="fas fa-arrow-down"></i>
        </div>
        <div className="post__content">
          <div className="content__upperbar">
            <div className="content__upperbar--left">
              <p className="subreddit__name upperbar__item">{subreddit}</p>
              <p className="user__name upperbar__item">
                Posted by u/{this.props.post.author}
              </p>
              <p className="timestamp upperbar__item">{m}</p>
            </div>
            <button className="content__upperbar--right">
              <i className="fas fa-plus"></i> Join
            </button>
          </div>
          <p className="content__header">{this.props.post.title}</p>
          <div className="player-wrapper">
            <Waypoint onEnter={this.handleEnter} onLeave={this.handleExit}>
              <div>
                <ReactPlayer
                  url={this.props.post.media.reddit_video.fallback_url}
                  playing={this.state.shouldPlay}
                  width="100%"
                  height="100%"
                  className="react-player"
                  controls={true}
                  volume={1}
                  muted={false}
                />
              </div>
            </Waypoint>
          </div>
          <div className="content__footer">
            <div className="comments footer__item">
              <i className="fas fa-comment-alt"></i>{" "}
              {comments > 1000
                ? (comments / 1000).toFixed(1) + "k"
                : String(comments)}
              comments
            </div>
            <div className="share footer__item">
              <i className="fas fa-share"></i>share
            </div>
            <div className="save footer__item">
              <i className="fas fa-plus-circle"></i>save
            </div>
          </div>
        </div>
      </div>
    );
  }
}
