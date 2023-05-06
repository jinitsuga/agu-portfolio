import React, { FC } from "react";
import { BlogItem } from "./BlogItem";
import { DarkModeContext } from "../Context/DarkMode";
import { entries } from "../Data/posts";

export type BlogPost = {
  name: string;
  content: string;
  id: number;
};

export const Blog: FC = () => {
  const [posts, setPosts] = React.useState<Array<BlogPost> | null>(null);
  const [activePost, setActivePost] = React.useState<BlogPost | null>(null);

  const { darkMode } = React.useContext(DarkModeContext);
  console.log(activePost);
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
    });

    const sortedPosts = entries.sort((a: BlogPost, b: BlogPost) => b.id - a.id);
    setPosts(sortedPosts);
  }, []);

  const postsList =
    posts &&
    posts.map((post, index) => {
      const description =
        post.content.length > 150 ? post.content.slice(0, 150) : post.content;

      return (
        <BlogItem
          key={index}
          id={post.id}
          title={post.name}
          description={description}
          setPost={setActivePost}
        />
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
