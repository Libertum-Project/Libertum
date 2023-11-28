import Link from 'next/link';
import Image from 'next/image';
import { useState, Fragment, useEffect } from 'react';
import { Web3Provider } from '@ethersproject/providers';
import { Menu, Transition } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/20/solid';
import { getUserPlbmBalance } from '../utils/smartContracts/pLBM/getUserPlbmBalance';
import { getUserUSDCBalance } from '../utils/smartContracts/pLBM/getUserUsdcBalance';
import { useWeb3ModalSigner, useWeb3ModalAccount } from '@web3modal/ethers5/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const ICONavbar = ({ signer, setSigner }) => {
  const navigation = [
    ['Whitepaper', '/whitepaper'],
    ['Marketplace', '/marketplace'],
    ['Enter App', '/login'],
  ];
  const [userPLBM, setUserPLBM] = useState(null);
  const [userUSDC, setUserUSDC] = useState(null);
  const web3signer = useWeb3ModalSigner().signer;
  const { address, chainId, isConnected } = useWeb3ModalAccount();

  // Whenever the web3modal account changes, fetch balances for current user
  useEffect(() => {
    if (isConnected) {
      switchToPolygonMumbai();
      fetchBalances(web3signer, address);
    } else {
      // Clear balances if user is disconnected
      setUserPLBM(null);
      setUserUSDC(null);
    }
  }, [isConnected]);

  const fetchBalances = async (signer, address) => {
    const userUSDCBalance = await getUserUSDCBalance(signer.provider, address);
    if (userUSDCBalance) {
      setUserUSDC(parseFloat(userUSDCBalance).toFixed(2));
    }
    const userPLBMBalance = await getUserPlbmBalance(signer.provider, address);
    if (userPLBMBalance) {
      setUserPLBM(parseFloat(userPLBMBalance).toFixed(2));
    }
  }

  const switchToPolygonMumbai = async () => {
    const polygonMumbaiData = {
      chainId: '0x13881',
      chainName: 'Polygon Mumbai Testnet',
      nativeCurrency: {
        name: 'Mumbai Matic',
        symbol: 'MATIC',
        decimals: 18,
      },
      rpcUrls: ['https://rpc-mumbai.maticvigil.com/'],
      blockExplorerUrls: ['https://mumbai.polygonscan.com/'],
    };
  
    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: polygonMumbaiData.chainId }],
      });
    } catch (error) {
      if (error.code === 4902) {
        try {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [polygonMumbaiData],
          });
        } catch (addError) {
          console.error('Error adding Polygon Mumbai:', addError);
        }
      } else {
        console.error('Error switching to Polygon Mumbai:', error);
      }
    }
  };

  return (
    <div className="min-w-full top-0 z-10 md:py-4">
      <div className="bg-transparent py-2">
        <nav className="container relative flex flex-wrap items-center justify-between p-4 py-2 mx-auto xl:px-0">
          <Link
            href="https://www.libertum.io/"
            className="md:px-12 flex items-center space-x-2 text-4xl text-bg-200 tracking-wide hover:scale-105 duration-500 focus:outline-none"
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
            <div>
              <w3m-button />
              {userUSDC !== null && userPLBM !== null && (
                <div className="flex justify-center mt-2 space-x-4 items-center">
                  <div className="flex items-center space-x-2">
                    <Image src="/img/ico/usdc.png" alt="USDC" width={20} height={20} />
                    <span className="text-md font-semibold text-custom-blue">{userUSDC} USDC</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Image src="/img/logo.svg" alt="Libertum" width={20} height={20} />
                    <span className="text-md font-semibold text-custom-blue">{userPLBM} pLBM</span>
                  </div>
                </div>
              )}
            </div>
            <Menu
              as="div"
              className="md:px-8 lg:pr-4 relative inline-block text-left"
            >
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
                          href="https://www.libertum.io"
                          className={classNames(
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'block px-4 py-2 text-md text-right',
                          )}
                        >
                          Home
                        </a>
                      )}
                    </Menu.Item>
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
                            "block px-4 py-2 text-md text-right",
                          )}
                        >
                          Whitepaper
                        </Link>
                      )}
                    </Menu.Item>

                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="https://www.marketplace.libertum.io/support"
                          className={classNames(
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'block px-4 py-2 text-md text-right',
                          )}
                        >
                          Support
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="https://www.marketplace.libertum.io/"
                          className={classNames(
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'block px-4 py-2 text-md text-right',
                          )}
                        >
                          Marketplace
                        </a>
                      )}
                    </Menu.Item>
                    <form method="POST" action="#">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href='https://www.marketplace.libertum.io/mydashboard/'
                            className={classNames(
                              active
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-700',
                              'block w-full px-4 py-2 text-md text-right',
                            )}
                          >
                            Enter App
                          </a>
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
