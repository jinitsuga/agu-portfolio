import React, { FC } from "react";

type BlogPost = {
  title: String;
  description: String;
};

export const BlogItem: FC<BlogPost> = ({ title, description }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};
