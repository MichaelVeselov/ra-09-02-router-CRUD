import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { Layout } from './components/Layout';
import { Posts } from './pages/Posts';
import { CreatePost } from './pages/CreatePost';

import { SelectPost } from './pages/SelectPost';
import { NotFoundPage } from './pages/NotFoundPage.jsx';

import './App.css';

const url = 'http://localhost:7777/posts';

export default function App() {
  const navigate = useNavigate();
  const closeWindow = () => navigate('/posts', { replace: true });

  return (
    <div className='App mt-3 mb-3 p-3'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Posts url={url} />} />
          <Route path='posts' element={<Posts url={url} />} />
          <Route
            path='posts/new'
            element={
              <CreatePost
                url={url}
                title={'Create post'}
                closeWindow={closeWindow}
              />
            }
          />
          <Route
            path='posts/:id'
            element={<SelectPost url={url} closeWindow={closeWindow} />}
          />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}
