import React from "react";
import { usePostProps } from "./Post.props";
import { hoc } from "src/utils/hoc";

const Post = hoc(usePostProps, () => {
  return <>hi</>;
});

export { Post };
