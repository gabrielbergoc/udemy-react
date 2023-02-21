export const getPosts = async () => {
  const postsFetch = fetch('https://jsonplaceholder.typicode.com/posts');
  const photosFetch = fetch('https://jsonplaceholder.typicode.com/photos');

  const [postsJson, photosJson] = await Promise.all([postsFetch, photosFetch]).then((responses) =>
    Promise.all(responses.map((res) => res.json())),
  );

  const posts = postsJson.map((post, i) => ({
    ...post,
    cover: photosJson[i].url,
  }));

  return posts;
};
