export default function Background() {
  return (
    <>
      <img
        className="lg:hidden blur-sm -z-10 fixed object-cover w-full h-full"
        src="/img/bg.png"
      ></img>
      <video
        className="hidden lg:block -z-10 fixed object-cover w-full h-full"
        src="/video/bg.mp4"
        type="video/mp4"
        autoPlay
        loop
        muted
      />
    </>
  );
}
