import { Fragment, ReactNode } from 'react';

import Header from '../components/Header';

import '../styles/main.scss';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Fragment>
      <a className="skip-link" href="#main">
        skip to main content
      </a>
      <Header />
      <main className="main" id="main" role="main">
        <div className="container">{children}</div>
      </main>
    </Fragment>
  );
};

export default Layout;
