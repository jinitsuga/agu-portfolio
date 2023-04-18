import React, { FC, memo } from "react";
import { getPosts } from "../Data/data";
import { BlogItem } from "./BlogItem";

export type BlogPost = {
  name: string;
  content: string;
  id: number;
};

export const Blog: FC = () => {
  const [posts, setPosts] = React.useState<Array<BlogPost> | null>(null);

  React.useEffect(() => {
    getPosts()
      .then(setPosts)
      .catch(() => setPosts([]));
  }, []);

  console.log(posts);

  const postsList = posts?.map((post) => {
    const description =
      post.content.length > 150 ? post.content.slice(0, 150) : post.content;

    return (
      <BlogItem key={post.id} title={post.name} description={description} />
    );
  });

  return (
    <section className="flex flex-column text-white w-screen h-screen">
      <h2 className="text-4xl text-left">Posts </h2>
    </section>
  );
};
