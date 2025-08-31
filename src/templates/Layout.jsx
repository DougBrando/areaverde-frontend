import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/organisms/Header';

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default Layout;