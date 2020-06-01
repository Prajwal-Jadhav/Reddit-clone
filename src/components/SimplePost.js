import React from "react";

export default function SimplePost() {
  return (
    <div className="SimplePost post">
      <div className="upvote__bar">3.4k</div>
      <div className="post__content">
        <div className="content__upperbar">
          <div className="content__upperbar--left">
            <p className="subreddit__name upperbar__item">r/subrreddd</p>
            <p className="user__name upperbar__item">eser123</p>
            <p className="timestamp upperbar__item">5 hours ago</p>
          </div>
          <button className="content__upperbar--right">Join</button>
        </div>
        <p className="content__header">This is the head of the content</p>
        <div className="content__footer">
          <div className="comments footer__item">100k comments</div>
          <div className="share footer__item">share</div>
          <div className="save footer__item">save</div>
        </div>
      </div>
    </div>
  );
}
