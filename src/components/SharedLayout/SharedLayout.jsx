
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom'
import { Header, Link } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <Link to="/">Home</Link>
        <Link to="/tweets">Tweets</Link>
      </Header>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
}
