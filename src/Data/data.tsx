import axios from "axios";

const baseUrl = import.meta.env.BASE_URL;

console.log(`${baseUrl}`);
console.log(`${baseUrl}/people`);
console.log(baseUrl + "/people");
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
