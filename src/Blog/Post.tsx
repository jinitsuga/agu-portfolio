import React, { FC } from "react";
import { BlogPost } from "./Blog";

type Post = {
  id: number;
};

export const Post: FC<BlogPost> = ({ id }) => {
  return <div>Some random post number {id}</div>;
};
