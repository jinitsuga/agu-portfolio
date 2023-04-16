import axios from "axios";

const baseUrl = "http://localhost:3001/api";

const getPosts = async () => {
  let posts = "";

  try {
    console.log("Making a request...");
    const response = await axios.get(`${baseUrl}/people`, {
      headers: { "Cache-Control": "max-age" },
    });
    posts = response.data.entries;
  } catch (err) {
    console.log(err);
  }
  return posts;
};

export { getPosts };
