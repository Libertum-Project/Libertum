"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChatBubbleLeftIcon,
  DocumentTextIcon,
  HomeIcon,
  DevicePhoneMobileIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef();

  const handleSidebarToggle = (e) => {
    e.stopPropagation();
    setSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setSidebarOpen(false);
      }
    };
    const handleScroll = () => {
      setSidebarOpen(false);
    };
    document.addEventListener("click", handleOutsideClick);
    window.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSidebarOpen]);

  const menuItems = [
    {
      name: "Home",
      href: "/",
      target: "",
      icon: HomeIcon,
    },
    {
      name: "Support",
      href: "/support",
      target: "",
      icon: ChatBubbleLeftIcon,
    },
    {
      name: "Buy LBM",
      href: "/ico",
      target: "",
      icon: CurrencyDollarIcon,
    },
    {
      name: "WaitList",
      href: "/subscribe",
      target: "",
      icon: DevicePhoneMobileIcon,
    },
    {
      name: "Whitepaper",
      href: "/whitepaperLibertum.pdf",
      target: "_blank",
      icon: DocumentTextIcon,
    },
  ];

  return (
    <div className="bg-transparent">
      <div className="flex overflow-hidden bg-transparent">
        {/* Sidebar */}
        <div
          ref={sidebarRef}
          className={`absolute bg-gray-800 z-50 text-white w-64 lg:w-96 min-h-screen overflow-y-auto transition-transform  ${
            isSidebarOpen ? "" : "-translate-x-full"
          } ease-in-out duration-500`}
        >
          {/* Contenido del Sidebar */}
          <div className="p-4">
            <h1 className="text-2xl font-semibold text-center">MENU</h1>

            <ul className="mt-8">
              {menuItems.map((item, index) => (
                <li key={index} className="mb-6">
                  <Link
                    href={item.href}
                    className="text-2xl font-thin hover:text-blue-200 hover:font-semibold"
                  >
                    <item.icon className="inline-block w-6 h-6 mr-2 " />{" "}
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex-1 flex flex-col overflow-hidden mt-6">
          {/* Navbar */}
          <div className="bg-transparent shadow">
            <div className="container mx-auto">
              <div className="flex justify-between items-center py-4 px-6">
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

                <div className="flex items-center gap-2 text-gray-500">
                  <button
                    onClick={handleSidebarToggle}
                    className="text-gray-500 hover:rotate-180 duration-300 transformtext-gray-600"
                  >
                    {isSidebarOpen ? (
                      <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        ></path>
                      </svg>
                    ) : (
                      <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

