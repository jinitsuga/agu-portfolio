import React, { FC, memo } from "react";
import { getPosts } from "../Data/data";
import { BlogItem } from "./BlogItem";
import { DarkModeContext } from "../Context/DarkMode";

export type BlogPost = {
  name: string;
  content: string;
  id: number;
};

export const Blog: FC = () => {
  const [posts, setPosts] = React.useState<Array<BlogPost> | null>(null);
  const { darkMode } = React.useContext(DarkModeContext);

  React.useEffect(() => {
    getPosts()
      .then((res: any) => setPosts(res))
      .catch(() => setPosts([]));
  }, []);

  console.log(posts);

  const postsList =
    posts &&
    posts.map((post) => {
      const description =
        post.content.length > 150 ? post.content.slice(0, 150) : post.content;

      return (
        <BlogItem key={post.id} title={post.name} description={description} />
      );
    });

  return (
    <section
      className={`${
        darkMode ? "text-white" : "text-black"
      }  " flex flex-col text-white w-screen h-screen items-center`}
    >
      <h2 className="text-4xl text-left">Posts</h2>
      <div className="flex flex-col justify-center">{postsList}</div>
    </section>
  );
};
