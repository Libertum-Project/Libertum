import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script
            defer
            dangerouslySetInnerHTML={{
              __html: `
               !function(e,t,n,i,p,s,a,c,o){e[p]||((a=e[p]=function(){a.process?a.process.apply(a,arguments):a.queue.push(arguments)}).queue=[],a.t=1*new Date,(c=t.createElement(n)).async=1,c.src="//cdn.ad360.media/js/ad360pixelevent.min.js?t="+864e5*Math.ceil(new Date/864e5),(o=t.getElementsByTagName(n)[0]).parentNode.insertBefore(c,o))}(window,document,"script",0,"ad360"),
                   ad360("init","e896a2ef-dd97-4fa6-a9ec-0150a0a00d23"),ad360("event","a7b55c54-7663-46f4-95d1-b18056894a83", {});
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
