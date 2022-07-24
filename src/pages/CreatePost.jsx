import { useState, useEffect, useRef } from 'react';

import { SinglePostPage } from './SinglePostPage';

function CreatePost(props) {
  const { title, url, post, closeWindow } = props;

  const [form, setForm] = useState({ id: post.id, content: post.content });

  const textAreaRef = useRef();

  useEffect(() => {
    textAreaRef.current.focus();
    textAreaRef.current.selectionStart = textAreaRef.current.value.length;
  }, []);

  function addPost(form) {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    }).then(() => closeWindow());
  }

  function handleInput(e) {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  }

  function handleSubmit() {
    if (form.content === '') {
      closeWindow();
      return;
    }
    addPost(form);
    setForm({ id: 0, content: '' });
  }

  const buttons = [
    {
      btnTitle: 'Publish',
      btnOnClick: handleSubmit,
      className: 'btn btn-secondary me-3 mb-2',
    },
  ];

  return (
    <>
      <SinglePostPage title={title} buttons={buttons} closeWindow={closeWindow}>
        <textarea
          ref={textAreaRef}
          className='w-100 p-1 m-1 bg-light text-dark'
          name='content'
          cols='4'
          rows='4'
          value={form.content}
          onChange={handleInput}
        ></textarea>
      </SinglePostPage>
    </>
  );
}

CreatePost.defaultProps = {
  post: {
    id: 0,
    content: '',
  },
};

export { CreatePost };
