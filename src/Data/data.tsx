import axios from "axios";

const baseUrl = "http://localhost:3001/api";

export function getPosts() {
  let posts = "";
  axios
    .get(`${baseUrl}/people`)
    .then((response) => {
      posts = response.data();
      console.log(posts);
      return posts;
    })
    .catch((err) => console.log(err));
}
