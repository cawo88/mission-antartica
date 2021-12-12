import React from "react";
import { usePostProps } from "./Post.props";
import { hoc } from "src/utils/hoc";

const Post = hoc(usePostProps, ({ posts, errorMessage, isLoading }) => {
  return (
    <div>
      {errorMessage && errorMessage}
      {isLoading
        ? posts.map((post, index: any) => {
            const { title } = post;
            return <div key={`item-${index}`}>{title}</div>;
          })
        : "is loading"}
    </div>
  );
});

export { Post };
