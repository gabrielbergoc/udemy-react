import { Component, useCallback, useEffect, useState } from 'react';
import './styles.css';
import { getPosts } from '../../utils';
import Posts from '../../components/Posts';
import Button from '../../components/Button';
import SearchInput from '../../components/Input/Search';

const HomeFunc = () => {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(6);
  const [initialPageSize, setInitialPageSize] = useState(6);
  const [noMorePosts, setNoMorePosts] = useState(false);
  const [searchString, setSearchString] = useState('');

  const extendPage = () => {
    setPageSize(pageSize + initialPageSize);
  };

  const paginate = useCallback((page, pageSize, allPosts) => {
    const start = page * pageSize;
    const end = start + pageSize;

    setPosts(allPosts.slice(start, end));
    setNoMorePosts(end >= allPosts.length);
  }, []);

  const handleButton = () => {
    extendPage();
    paginate();
  };

  const handleChange = (e) => {
    setSearchString(e.target.value);
  };

  const filteredPosts = searchString
    ? allPosts.filter((post) => post.title.toLowerCase().includes(searchString.toLowerCase()))
    : posts;

  // executed only once (no dependencies)
  useEffect(() => {
    console.log('oi');
    const loadAllPosts = async () => {
      const allPosts = await getPosts();
      setAllPosts(allPosts);
    };

    loadAllPosts();
  }, []);

  // executed everytime a dependency changes
  useEffect(() => {
    paginate(page, pageSize, allPosts);
  }, [paginate, page, pageSize, allPosts]);

  return (
    <section className="container">
      <div className="search-container">
        <SearchInput handleChange={handleChange} value={searchString} placeholder="Search posts..." />
      </div>

      {filteredPosts.length > 0 && <Posts posts={filteredPosts} />}
      {filteredPosts.length === 0 && <p>No posts match the search.</p>}

      <div className="button-container">
        {!searchString && <Button onClick={handleButton} disabled={noMorePosts} text="More posts..." />}
      </div>
    </section>
  );
};

class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    pageSize: 6,
    initialPageSize: 6,
    noMorePosts: false,
    searchString: '',
  };

  // executed right after the component is first rendered in the DOM
  async componentDidMount() {
    await this.loadAllPosts();
    this.paginate();
  }

  // executed right before the component is destroyed
  componentWillUnmount() {}

  loadAllPosts = async () => {
    const allPosts = await getPosts();
    this.setState({ allPosts });
  };

  extendPage = () => {
    // setState(state: (prevState, prevProps) => any, callback?: () => void)
    //
    // This setState signature ensures all setState calls always receive the
    // same state values. The callback is executed after all setState
    // operations.
    //
    this.setState(
      ({ pageSize, initialPageSize }) => ({
        pageSize: pageSize + initialPageSize,
      }),
      () => console.log(this.state.pageSize), // this prints the new state
    );
    console.log(this.state.pageSize); // this prints the old state
  };

  paginate = () => {
    this.setState(({ page, pageSize, allPosts }) => {
      const start = page * pageSize;
      const end = start + pageSize;

      return {
        posts: allPosts.slice(start, end),
        noMorePosts: end >= allPosts.length,
      };
    });
  };

  handleButton = () => {
    this.extendPage();
    this.paginate();
  };

  handleChange = (e) => {
    this.setState({ searchString: e.target.value });
  };

  render() {
    const { posts, allPosts, noMorePosts, searchString } = this.state;

    const filteredPosts = searchString
      ? allPosts.filter((post) => post.title.toLowerCase().includes(searchString.toLowerCase()))
      : posts;

    return (
      <section className="container" data-testid="home-container">
        <div className="search-container">
          <SearchInput handleChange={this.handleChange} value={searchString} placeholder="Search posts..." />
        </div>

        {filteredPosts.length > 0 && <Posts posts={filteredPosts} />}
        {filteredPosts.length === 0 && <p>No posts match the search.</p>}

        <div className="button-container">
          {!searchString && <Button onClick={this.handleButton} disabled={noMorePosts} text="More posts..." />}
        </div>
      </section>
    );
  }
}

export default Home;
