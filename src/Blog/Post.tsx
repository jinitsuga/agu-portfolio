import React, { FC } from "react";
import { BlogPost } from "./Blog";

type Post = {
  id: number;
};

export const Post: FC<BlogPost> = ({ name, id, content }) => {
  return (
    <div className="max-w-[60%]">
      <h2 className="text-3xl mb-2 text-cyan-500">
        {id}. {name}
      </h2>
      <p>{content}</p>
    </div>
  );
};
