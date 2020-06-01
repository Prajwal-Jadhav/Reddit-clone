import React from "react";

function decode(str) {
  let textarea = document.createElement("textarea");
  textarea.innerHTML = str;
  return textarea.value;
}

export default function SimplePost(props) {
  const {
    ups,
    subreddit_name_prefixed: subreddit,
    num_comments: comments,
  } = props.post;

  return (
    <div className="SimplePost post">
      <div className="upvote__bar">
        {ups > 1000 ? (ups / 1000).toFixed(1) : String(ups)}
      </div>
      <div className="post__content">
        <div className="content__upperbar">
          <div className="content__upperbar--left">
            <p className="subreddit__name upperbar__item">{subreddit}</p>
            <p className="user__name upperbar__item">
              Posted by u/{props.post.author_fullname}
            </p>
            <p className="timestamp upperbar__item">5 hours ago</p>
          </div>
          <button className="content__upperbar--right">Join</button>
        </div>
        <p className="content__header">{props.post.title}</p>
        <p className="content__subtext">
          {props.post.selftext}
          <p class="read-more">
            <a href="#df" class="button">
              &nbsp;
            </a>
          </p>
        </p>
        <div className="content__footer">
          <div className="comments footer__item">
            {comments > 1000 ? (comments / 1000).toFixed(1) : String(comments)}
          </div>
          <div className="share footer__item">share</div>
          <div className="save footer__item">save</div>
        </div>
      </div>
    </div>
  );
}
