import './globals.css';
import Script from 'next/script';
import { GoogleTagManager } from '@next/third-parties/google';

import Toaster from '@/components/ui/toaster';
import Footer from '@/components/Footer/Footer';
import NavBar from '@/components/Navbar/NavBar';

import { ThirdwebContextProvider } from './providers/ThirdWebContextProvider';

export const metadata = {
  title: 'Libertum',
  description: 'Exploring freedom, technology, and innovation in our journey to a brighter future.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://cdn.ad360.media" />
        <Script
          defer
          id="za6uwxwg"
          dangerouslySetInnerHTML={{
            __html: `(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/za6uwxwg';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();`,
          }}
        />

        <Script
          defer
          id="za6uwxwg1"
          dangerouslySetInnerHTML={{
            __html: `window.intercomSettings = {
    api_base: "https://api-iam.intercom.io",
    app_id: "za6uwxwg",
  };`,
          }}
        />

        <GoogleTagManager gtmId="GTM-WBK9FF4T" />
      </head>

      <ThirdwebContextProvider>
        <body id="body">
          <NavBar />
          {children}
          <Footer />
          <Toaster />
        </body>
      </ThirdwebContextProvider>

      <Script
        defer
        id="AD360"
        dangerouslySetInnerHTML={{
          __html: `!function(e,t,n,i,p,s,a,c,o){e[p]||((a=e[p]=function(){a.process?a.process.apply(a,arguments):a.queue.push(arguments)}).queue=[],a.t=1*new Date,(c=t.createElement(n)).async=1,c.src="https://cdn.ad360.media/js/ad360pixelevent.min.js?t="+864e5*Math.ceil(new Date/864e5),(o=t.getElementsByTagName(n)[0]).parentNode.insertBefore(c,o))}(window,document,"script",0,"ad360"), ad360("init","e896a2ef-dd97-4fa6-a9ec-0150a0a00d23"),ad360("event","a7b55c54-7663-46f4-95d1-b18056894a83", {});`,
        }}
      />
    </html>
  );
}
