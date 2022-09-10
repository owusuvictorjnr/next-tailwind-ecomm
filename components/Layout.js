// The component Layout is a wrapper for all the pages

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

function Layout({ title, children }) {
  return (
    // I'm using html components here
    <>
      <Head>
        <title>{title ? title + '-Vidan`s Fashion' : 'Vidan`s Fashion'}</title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 justify-between items-center px-4 shadow-md">
            <Link href="/">
              <a className="text-lg font-bold">vidan`s fshion</a>
            </Link>
            <div className="">
              <Link href="/cart">
                <a className="p-2">Cart</a>
              </Link>
              <Link href="/login">
                <a className="p-2">Login</a>
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex h-10 justify-center shadow-inner">
          <p> Copyright &copy; 2022 vitech solutions</p>
        </footer>
      </div>
    </>
  );
}

export default Layout;
