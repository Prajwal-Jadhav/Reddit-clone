import React from "react";
import SimplePost from "./SimplePost";
import ImagePost from "./ImagePost";
import VideoPost from "./VideoPost";
import LinkPost from "./LinkPost";

export default function PostList({ posts }) {
  return (
    <div className="PostList">
      {posts.map(post => {
        if (post.data.is_video) {
          return <VideoPost key={post.data.id} post={post.data} />;
        } else if (post.data.post_hint === "link") {
          return <LinkPost key={post.data.id} post={post.data} />;
        } else if (
          post.data.url.endsWith(".jpg") ||
          post.data.url.endsWith(".gifv") ||
          post.data.url.endsWith(".png")
        ) {
          return <ImagePost key={post.data.id} post={post.data} />;
        }

        return <SimplePost key={post.data.id} post={post.data} />;
      })}
    </div>
  );
}
