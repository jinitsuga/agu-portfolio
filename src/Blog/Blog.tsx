import React, { FC, memo } from "react";
import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../Data/data";
import { useLoaderData } from "react-router-dom";
import axios from "axios";

export const Blog: FC = () => {
  const [posts, setPosts] = React.useState<Array<any> | null>(null);

  console.log("hola");
  React.useEffect(() => {
    getPosts()
      .then(setPosts)
      .catch(() => setPosts([]));
  }, []);

  console.log(posts);
  // const { isLoading, isError, data, error } = useQuery({
  //   queryKey: ["posts"],
  //   queryFn: async () => {
  //     const posts = await getPosts();
  //     return posts;
  //   },
  // });

  // const posts = useLoaderData();

  // if (postsQuery.status == "success") {
  //   console.log(postsQuery.data);
  // }

  return (
    <section className="flex flex-column text-white w-screen h-screen">
      <h2 className="text-4xl text-left">Posts </h2>
      {posts && posts.map(JSON.stringify)}
    </section>
  );
};
