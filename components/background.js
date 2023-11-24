import Image from "next/image";

export default function Background() {
  return (
    <>
      <Image
        className="md:hidden blur-sm -z-10 fixed object-cover w-full h-full overflow-clip"
        src="/img/bg.webp"
        width={100} height={100} 
      />
      <video
        className="hidden md:block -z-10 fixed object-cover w-full h-full overflow-clip"
        src="/video/bg.webm"
        type="video/webm"
        autoPlay
        loop
        muted
      />
    </>
  );
}
