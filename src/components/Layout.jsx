import { Outlet, Link } from 'react-router-dom';

function Layout() {
  return (
    <>
      <div className='p-2 d-flex justify-content-end border-bottom border-secondary border-2'>
        <Link to='/posts/new'>
          <button className='btn btn-secondary'>Add new post</button>
        </Link>
      </div>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
}
export { Layout };
