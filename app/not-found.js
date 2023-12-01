import Image from 'next/image';
import Link from 'next/link';
 
export default function NotFound() {
  return (
    <div className="text-gray-800 min-h-screen flex items-center">
    <div className="container mx-auto p-4 flex flex-wrap items-center">
      <div className="w-full md:w-5/12 text-center p-4">
        <Image 
        src="/img/404.svg" 
        alt="Not Found" 
        width={400}
        height={400}
        />
      </div>
      <div className="w-full md:w-7/12 text-center md:text-left p-4">
        <div className="text-6xl font-medium">404</div>
        <div className="text-xl md:text-3xl font-medium mb-4">
          Oops. This page has gone missing.
        </div>
        <div className="text-lg mb-8">
          You may have mistyped the address or the page may have moved.
        </div>
        <Link 
          href="/" 
          className="border border-blue-400 rounded p-4">
            Go Home
        </Link>
      </div>
    </div>
  </div>
  )
}