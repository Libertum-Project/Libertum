'use client';
import { ConnectEmbed, lightTheme, useShowConnectEmbed, useConnectionStatus } from '@thirdweb-dev/react';
import { redirect } from 'next/navigation';
import React, { useLayoutEffect } from 'react';

const Page = () => {
  const shouldShowConnectEmbed = useShowConnectEmbed();
  const status = useConnectionStatus();

  useLayoutEffect(() => {
    if (status == 'connected') redirect('/profile');
  });

  return (
    <>
      {shouldShowConnectEmbed ? (
        <div className="w-full min-h-screen flex flex-col justify-center items-center bg-primary-gradient gap-10">
          <ConnectEmbed
            auth={{
              onLogin: () => {
                redirect('/get');
              },
            }}
            theme={lightTheme({
              colors: {
                accentText: '#00B3B5',
                accentButtonBg: '#00B3B5',
              },
            })}
            showThirdwebBranding={false}
            style={{
              border: 'none',
              borderRadius: 0,
            }}
          />
        </div>
      ) : (
        status == 'connected' && redirect('/get')
      )}
    </>
  );
};

export default Page;
