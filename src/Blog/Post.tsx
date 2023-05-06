import React, { FC } from "react";

type Post = {
  id: number;
};

export const Post: FC<Post> = ({ id }) => {
  return <div>Some random post number {id}</div>;
};
