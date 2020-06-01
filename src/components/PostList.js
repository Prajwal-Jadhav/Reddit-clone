import React from "react";
import SimplePost from "./SimplePost";
import ImagePost from "./ImagePost";
import VideoPost from "./VideoPost";
import LinkPost from "./LinkPost";

export default function PostList({ posts }) {
  return (
    <div>
      {posts.map(post => {
        if (post.data.is_video) {
          return <VideoPost post={post.data} />;
        } else if (post.data.post_hint === "link") {
          return <LinkPost post={post.data} />;
        } else if (
          post.data.url.endsWith(".jpg") ||
          post.data.url.endsWith(".gifv")
        ) {
          return <ImagePost post={post.data} />;
        }

        return <SimplePost post={post.data} />;
      })}
    </div>
  );
}
