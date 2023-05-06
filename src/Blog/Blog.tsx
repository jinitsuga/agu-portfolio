import React, { FC } from "react";
import { BlogItem } from "./BlogItem";
import { DarkModeContext } from "../Context/DarkMode";
import { entries } from "../Data/posts";
import { Post } from "./Post";

export type BlogPost = {
  name: string;
  content: string;
  id: number;
};

export const Blog: FC = () => {
  const [posts, setPosts] = React.useState<Array<BlogPost> | null>(null);
  const [activePost, setActivePost] = React.useState<BlogPost | null>(null);

  const { darkMode } = React.useContext(DarkModeContext);

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
          content={post.content}
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
      {!activePost ? (
        <div>
          <h2 className="text-4xl text-center">Posts</h2>
          <div className="flex flex-col justify-center">{postsList}</div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center">
          <button
            className="text-2xl text-cyan-400 p-4 hover:outline mb-4 rounded"
            onClick={(e: any) => {
              e.preventDefault();
              setActivePost(null);
            }}
          >
            Back to posts
          </button>
          <Post {...activePost} />
        </div>
      )}
    </section>
  );
};
