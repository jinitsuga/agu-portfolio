import axios from "axios";

export function getPosts() {
  let posts = "";
  axios
    .get("localhost:3001/api/people")
    .then((response) => {
      posts = response.data();
      console.log(posts);
      return posts;
    })
    .catch((err) => console.log(err));
}
