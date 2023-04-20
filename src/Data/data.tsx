import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;

console.log(`${baseUrl}`);

const getPosts = async () => {
  let posts = "";
  try {
    console.log("Making a request...");
    const response = await axios.get(`${baseUrl}`, {
      headers: { "Cache-Control": "max-age" },
    });
    posts = response.data.entries;
  } catch (err) {
    console.log(err);
  }
  return posts;
};

export { getPosts };
