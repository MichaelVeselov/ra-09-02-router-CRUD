import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useJsonFetch } from '../hooks/useJsonFetch';

import { SinglePostPage } from './SinglePostPage';
import { CreatePost } from './CreatePost';

function SelectPost(props) {
  const { url, closeWindow } = props;
  const { id } = useParams();

  const [viewMode, setViewMode] = useState(true);
  const [data, loading, error] = useJsonFetch(url);

  let currentPost;
  if (data) {
    currentPost = data.find((item) => Number(item.id) === Number(id));
  }

  function deletePost(id) {
    fetch(`http://localhost:7777/posts/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => closeWindow());
  }

  const buttons = [
    {
      btnTitle: 'Edit post',
      btnOnClick: () => {
        setViewMode(false);
      },
      className: 'btn btn-success me-3 mb-2',
    },
    {
      btnTitle: 'Delete post',
      btnOnClick: () => {
        deletePost(id);
      },
      className: 'btn btn-danger me-3 mb-2',
    },
  ];

  return (
    <>
      {loading && <div>Loading...Please wait.</div>}
      {error && <div>{error}</div>}
      {data && (
        <>
          {viewMode ? (
            <SinglePostPage
              title={'View post'}
              buttons={buttons}
              closeWindow={closeWindow}
            >
              <p>{currentPost.content}</p>
            </SinglePostPage>
          ) : (
            <CreatePost
              url={url}
              title={'Edit post'}
              post={currentPost}
              closeWindow={closeWindow}
            />
          )}
        </>
      )}
    </>
  );
}

export { SelectPost };
