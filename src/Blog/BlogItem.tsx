import React, { FC } from "react";
// import { BlogPost } from "./Blog";

type BlogItemType = {
  title: string;
  description: string;
  key: number;
};

export const BlogItem: FC<BlogItemType> = ({ title, description, key }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};
