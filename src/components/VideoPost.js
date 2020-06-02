import React from "react";
import moment from "moment";

export default function VideoPost(props) {
  const {
    ups,
    created_utc,
    subreddit_name_prefixed: subreddit,
    num_comments: comments,
  } = props.post;

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
              Posted by u/{props.post.author}
            </p>
            <p className="timestamp upperbar__item">{m}</p>
          </div>
          <button className="content__upperbar--right">
            <i className="fas fa-plus"></i> Join
          </button>
        </div>
        <p className="content__header">{props.post.title}</p>
        <iframe
          className="video__frame"
          src={props.post.media.reddit_video.fallback_url}
          title="video"
        ></iframe>
        <div className="content__footer">
          <div className="comments footer__item">
            <i className="fas fa-comment-alt"></i>{" "}
            {comments > 1000
              ? (comments / 1000).toFixed(1) + "k"
              : String(comments)}{" "}
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
