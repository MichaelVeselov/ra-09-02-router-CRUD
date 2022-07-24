import moment from 'moment';
import 'moment/locale/ru';

import { Link } from 'react-router-dom';

moment.locale('ru');

function Post(props) {
  const { post } = props;

  return (
    <Link
      key={post.id}
      to={`/posts/${post.id}`}
      style={{ textDecoration: 'none' }}
    >
      <li>
        <div className='card mt-3'>
          <div className='card-header p-1 pb-0 fs-6 fw-bold'>
            <p className='text-muted'>{moment(post.created).fromNow()}...</p>
          </div>
          <div className='card-body'>
            <p className='text-muted ms-5 fs-4'>{post.content}</p>
          </div>
        </div>
      </li>
    </Link>
  );
}

export { Post };
