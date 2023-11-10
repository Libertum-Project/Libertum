export default function Background() {
  return (
    <>
      <img
        className="md:hidden blur-sm -z-10 fixed object-cover w-full h-full overflow-clip"
        src="/img/bg.png"
      ></img>
      <video
        className="hidden md:block -z-10 fixed object-cover w-full h-full"
        src="/video/bg.mp4"
        type="video/mp4"
        autoPlay
        loop
        muted
      />
    </>
  );
}
