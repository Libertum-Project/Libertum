import Link from "next/link";
import Image from "next/image";
import { useState, Fragment, useEffect } from "react";
import { Web3Provider } from "@ethersproject/providers";
import { Menu, Transition } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ICONavbar = ({ provider, setProvider }) => {
  const [web3Modal, setWeb3Modal] = useState(null);
  const [isClient, setIsClient] = useState(false);
  const usdcTokenCount = 1340;
  const lbmTokenCount = 48000;
  const navigation = [
    ["Whitepaper", "/whitepaper"],
    ["Marketplace", "/marketplace"],
    ["Enter App", "/login"],
  ];

  useEffect(() => {
    // This will be executed only on the client side
    setIsClient(true);

    // Dynamically import the Web3Modal when on the client-side
    const Web3Modal = require("web3modal").default;
    const newWeb3Modal = new Web3Modal({
      network: "localhost",
      cacheProvider: true,
    });
    setWeb3Modal(newWeb3Modal);
  }, []);

  // useEffect to connect wallet after web3Modal is set
  useEffect(() => {
    if (web3Modal && web3Modal.cachedProvider) {
      connectWallet();
    }
  }, [web3Modal]); // Dependency array ensures this effect runs when web3Modal changes

  const switchToHardhat = async (provider) => {
    try {
      await provider.send("wallet_addEthereumChain", [
        {
          chainId: "0x7A69",
          chainName: "Hardhat",
          nativeCurrency: { name: "ETH", symbol: "ETH", decimals: 18 },
          rpcUrls: ["http://localhost:8545"],
          blockExplorerUrls: ["https://explorer.hardhat.org/"],
        },
      ]);
      return true;
    } catch (switchError) {
      console.error(switchError);
      return false;
    }
  };

  const connectWallet = async () => {
    try {
      const newProvider = await web3Modal.connect();
      const ethersProvider = new Web3Provider(newProvider);
      const network = await ethersProvider.getNetwork();

      if (network.chainId !== 31337) {
        const switched = await switchToHardhat(newProvider);
        if (!switched) {
          alert("Please manually switch to the Hardhat network");
          return;
        }
      }

      setProvider(ethersProvider);

      // Listen for account changes
      newProvider.on("accountsChanged", (accounts) => {
        setProvider(new Web3Provider(newProvider));
      });

      // Listen for chain changes
      newProvider.on("chainChanged", async (chainIdHex) => {
        const newChainId = parseInt(chainIdHex, 16);
        if (newChainId !== 31337) {
          const switched = await switchToHardhat(newProvider);
          if (!switched) {
            alert("Please manually switch to the Hardhat network");
          }
        } else {
          setProvider(new Web3Provider(newProvider));
        }
      });
    } catch (error) {
      console.error("Failed to connect", error);
    }
  };

  const disconnectWallet = () => {
    web3Modal.clearCachedProvider();
    setProvider(null);
  };

  if (!isClient) {
    return null; // or a placeholder/skeleton component
  }

  return (
    <div className="min-w-full top-0 z-10 lg:py-4">
      <div className="bg-transparent py-2">
        <nav className="container relative flex flex-wrap items-center justify-between p-4 py-2 mx-auto xl:px-0">
          <Link
            href="/"
            className="flex items-center space-x-2 text-4xl text-bg-200 tracking-wide hover:scale-105 duration-500 focus:outline-none"
          >
            <Image
              src="/img/logo.svg"
              alt="N"
              width="32"
              height="32"
              className="w-12 hover:grow-5"
            />
            <span className="hidden md:block font-logo">LIBERTUM</span>
          </Link>
          <div className="flex relative flex-wrap space-x-4 justify-end">
            <div className="hidden md:grid lg:grid grid-rows-1">
              <div className="col-span-1 grid grid-rows-1 ">
                <div className="row-span-1 lg:text-md my-auto font-medium text-gray-800">
                  {usdcTokenCount.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}{" "}
                  USDC
                </div>
                <div className="row-span-1 text-center lg:text-md my-auto font-medium text-gray-800">
                  {lbmTokenCount.toLocaleString(undefined, {})} LBM
                </div>
              </div>
            </div>
            <div>
              {provider ? (
                <div className="lg:flex">
                  <button
                    onClick={disconnectWallet}
                    className="px-3 py-2 text-lg font-logo uppercase text-bg-100 tracking-wide bg-[#f6f9fb] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)] hover:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)] border hover:bg-gray-500 hover:text-white"
                  >
                    Disconnect Wallet
                  </button>
                </div>
              ) : (
                <div className="lg:flex">
                  <button
                    onClick={connectWallet}
                    className="px-3 py-2 text-lg font-logo uppercase text-bg-100 tracking-wide bg-[#f6f9fb] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)] hover:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)] border hover:bg-gray-500 hover:text-white"
                  >
                    Connect Wallet
                  </button>
                </div>
              )}
            </div>
            <Menu as="div" className="lg:pr-4 relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex w-full mt-2 justify-center rounded-md shadow-sm text-black hover:text-white ">
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
                        <a
                          href="/whitepaper"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-md text-right"
                          )}
                        >
                          Whitepaper
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-md text-right"
                          )}
                        >
                          Marketplace
                        </a>
                      )}
                    </Menu.Item>
                    <form method="POST" action="#">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            type="submit"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block w-full px-4 py-2 text-md text-right"
                            )}
                          >
                            Enter App
                          </button>
                        )}
                      </Menu.Item>
                    </form>
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

export default ICONavbar;
