import P from 'prop-types';
import './styles.css';

const PostCard = ({ post }) => (
  <div className="post">
    <img src={post.cover} alt={post.title}></img>
    <div className="post-content">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  </div>
);

PostCard.propTypes = {
  post: P.shape({
    id: P.number.isRequired,
    title: P.string.isRequired,
    body: P.string.isRequired,
    cover: P.string.isRequired,
  }).isRequired,
};

export default PostCard;
