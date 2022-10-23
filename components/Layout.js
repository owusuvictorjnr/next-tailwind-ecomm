// The component Layout is a wrapper for all the pages

import React, { useContext, useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { Store } from "../utils/Store";

function Layout({ title, children }) {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const [cartItemsCount, setCartItemsCount] = useState(0);
  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);

  return (
    // html components
    <>
      <Head>
        <title>{title ? title + "-Vidan`s Fashion" : "Vidan`s Fashion"}</title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex min-h-screen flex-col justify-between bg-white text-black">
        <header>
          <nav className="flex h-12 justify-between items-center px-4 shadow-md">
            <Link href="/">
              <a className="text-lg font-bold">vidan`s fashion</a>
            </Link>
            <div className="">
              <Link href="/cart">
                <a className="p-2">
                  Cart
                  {cartItemsCount > 0 && (
                    <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                      {/* Accumulator of all the sum quantities */}
                      {cartItemsCount}
                    </span>
                  )}
                </a>
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
