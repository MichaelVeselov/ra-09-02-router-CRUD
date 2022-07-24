import { useJsonFetch } from '../hooks/useJsonFetch';
import { Post } from './Post';

function Posts(props) {
  const { url } = props;
  const [data, loading, error] = useJsonFetch(url);

  const elements = () => {
    if (data) {
      return data.map((post) => <Post post={post} key={post.id} />);
    }
  };

  return (
    <div>
      {loading && <div>Loading...Please wait.</div>}
      {error && <div>{error}</div>}
      {data && (
        <div>
          {data.length < 1 ? (
            <div className='mt-3'>
              The post-list is empty.....Please add new posts...
            </div>
          ) : (
            <ul className='list-unstyled'>{elements()}</ul>
          )}
        </div>
      )}
    </div>
  );
}

export { Posts };
