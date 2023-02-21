import P from 'prop-types';
import PostCard from '../PostCard';
import './styles.css';

const Posts = ({ posts }) => (
  <div className="posts">
    {posts.map((post) => (
      <PostCard key={post.id} post={post} />
    ))}
  </div>
);

Posts.propTypes = {
  posts: P.arrayOf(
    P.shape({
      id: P.number.isRequired,
      title: P.string.isRequired,
      body: P.string.isRequired,
      cover: P.string.isRequired,
    }),
  ).isRequired,
};

export default Posts;
