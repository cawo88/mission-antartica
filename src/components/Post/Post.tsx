import React from "react";
import { usePostProps } from "./Post.props";
import { hoc } from "src/utils/hoc";

const Post = hoc(usePostProps, ({ posts, errorMessage, isLoading, loadMoreElementRef }) => {
  return (
    <div>
      {errorMessage && errorMessage}
      {isLoading ? (
        <ul>
          {posts.map((post, index: any) => {
            const { title, id, thumbnailUrl } = post;
            return (
              <li key={`item-${index}`}>
                <h1>{id}</h1>
                <img src={thumbnailUrl} alt={title} />
                <p>{title}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        "is loading"
      )}
      <h3 ref={loadMoreElementRef}>load more...</h3>
    </div>
  );
});

export { Post };
