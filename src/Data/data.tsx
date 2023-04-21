import axios from "axios";

const reqUrl = import.meta.env.VITE_REQ_URL;

const getPosts = async () => {
  let posts = "";
  try {
    const response = await axios.get(reqUrl, {
      headers: { "Cache-Control": "max-age" },
    });
    posts = response.data.entries;
  } catch (err) {
    console.log(err);
  }
  return posts;
};

export { getPosts };
