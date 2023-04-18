import React, { FC } from "react";
// import { BlogPost } from "./Blog";

type BlogItemType = {
  title: string;
  description: string;
  key: number;
};

export const BlogItem: FC<BlogItemType> = ({ title, description, key }) => {
  return (
    <div className="flex flex-col justify-center items-center border rounded p-4 max-w-xl m-2 hover:cursor-pointer hover:text-cyan-200">
      <h4 className="text-2xl text-cyan-400 mb-2 ">{title}</h4>
      <p>{description}...</p>
    </div>
  );
};
