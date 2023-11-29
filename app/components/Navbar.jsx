'use client'
import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/20/solid";

import * as React from "react";
import { useState } from "react"; 
import { motion } from "framer-motion";


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}



const Navbar = () => {


  return (
    <div className="min-w-full top-0 z-10 md:py-4">
      <div className="bg-transparent py-2">
        <nav className="container relative flex flex-wrap items-center justify-between p-4 py-2 mx-auto xl:px-0">
          <Link
            href="/"
            prefetch={false}
            className="md:px-12 flex items-center space-x-2 text-4xl text-bg-200 tracking-wide hover:scale-105 duration-500 focus:outline-none"
          >
            <Image
              src="/img/logo.svg"
              alt="N"
              width="32"
              height="32"
              className="w-12 hover:grow-5"
            />
            <span className="font-logo">LIBERTUM</span>
          </Link>
          <div className="flex relative flex-wrap space-x-4 justify-end">
            <Menu
              as="div"
              className="md:px-8 lg:pr-4 relative inline-block text-left"
            >
              <div>
                <Menu.Button
                  className="inline-flex w-full justify-center rounded-md shadow-sm text-black hover:text-white "
                  aria-label="Toggle navigation menu"
                >
                  <Bars3Icon className="h-8 w-8" aria-hidden="true" />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-auto origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          prefetch={false}
                          href="/whitepaperLibertum.pdf"
                          target="_blank"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-md text-right"
                          )}
                        >
                          Whitepaper
                        </Link>
                      )}
                    </Menu.Item>

                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          prefetch={false}
                          href="https://www.marketplace.libertum.io/support"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-md text-right"
                          )}
                        >
                          Support
                        </Link>
                      )}
                    </Menu.Item>

                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          prefetch={false}
                          href="/subscribe"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-md text-right"
                          )}
                        >
                          Marketplace
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          prefetch={false}
                          href="/subscribe"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-md text-right"
                          )}
                        >
                          Waitlist
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item className="bg-gray-300 font-semibold">
                      {({ active }) => (
                        <Link
                          href="/ico"
                          className={classNames(
                            active
                              ? "bg-gray-200 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-md text-right"
                          )}
                        >
                          Buy $LBM
                        </Link>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
