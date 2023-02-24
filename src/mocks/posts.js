export const rawPosts = [
  {
    userId: 1,
    id: 1,
    title: 'post #1 title',
    body: 'post #1 body',
  },
  {
    userId: 1,
    id: 2,
    title: 'post #2 title',
    body: 'post #2 body',
  },
  {
    userId: 1,
    id: 3,
    title: 'post #3 title',
    body: 'post #3 body',
  },
  {
    userId: 1,
    id: 4,
    title: 'post #4 title',
    body: 'post #4 body',
  },
  {
    userId: 1,
    id: 5,
    title: 'post #5 title',
    body: 'post #5 body',
  },
  {
    userId: 1,
    id: 6,
    title: 'post #6 title',
    body: 'post #6 body',
  },
  {
    userId: 1,
    id: 7,
    title: 'post #7 title',
    body: 'post #7 body',
  },
  {
    userId: 1,
    id: 8,
    title: 'post #8 title',
    body: 'post #8 body',
  },
  {
    userId: 1,
    id: 9,
    title: 'post #9 title',
    body: 'post #9 body',
  },
  {
    userId: 1,
    id: 10,
    title: 'post #10 title',
    body: 'post #10 body',
  },
];

export const photos = [
  {
    albumId: 1,
    id: 1,
    title: 'photo #1 title',
    url: 'img/img1.png',
    thumbnailUrl: 'https://via.placeholder.com/150/92c952',
  },
  {
    albumId: 1,
    id: 2,
    title: 'photo #2 title',
    url: 'img/img2.png',
    thumbnailUrl: 'https://via.placeholder.com/150/771796',
  },
  {
    albumId: 1,
    id: 3,
    title: 'photo #3 title',
    url: 'img/img3.png',
    thumbnailUrl: 'https://via.placeholder.com/150/24f355',
  },
  {
    albumId: 1,
    id: 4,
    title: 'photo #4 title',
    url: 'img/img4.png',
    thumbnailUrl: 'https://via.placeholder.com/150/d32776',
  },
  {
    albumId: 1,
    id: 5,
    title: 'photo #5 title',
    url: 'img/img5.png',
    thumbnailUrl: 'https://via.placeholder.com/150/f66b97',
  },
  {
    albumId: 1,
    id: 6,
    title: 'photo #6 title',
    url: 'img/img6.png',
    thumbnailUrl: 'https://via.placeholder.com/150/56a8c2',
  },
  {
    albumId: 1,
    id: 7,
    title: 'photo #7 title',
    url: 'img/img7.png',
    thumbnailUrl: 'https://via.placeholder.com/150/b0f7cc',
  },
  {
    albumId: 1,
    id: 8,
    title: 'photo #8 title',
    url: 'img/img8.png',
    thumbnailUrl: 'https://via.placeholder.com/150/54176f',
  },
  {
    albumId: 1,
    id: 9,
    title: 'photo #9 title',
    url: 'img/img9.png',
    thumbnailUrl: 'https://via.placeholder.com/150/51aa97',
  },
  {
    albumId: 1,
    id: 10,
    title: 'photo #10 title',
    url: 'img/img10.png',
    thumbnailUrl: 'https://via.placeholder.com/150/810b14',
  },
];

export const posts = rawPosts.map((post, i) => {
  const postWithCover = { ...post };
  postWithCover.cover = photos[i].url;
  return postWithCover;
});

export const post = posts[0];
