import Hero from './hero/hero';
import Feed from './feed/feed';

export default function Roadmap() {
  return (
    <>
      <Hero />
      <div className="container  max-w-[75rem] m-auto flex flex-col justify-center items-center mt-12">
        <p className="font-space_grotesk font-semibold text-4xl ">Roadmap</p>
        <video controls width="600" className="rounded-[15px] mt-6" poster="./roadmapView.png">
          <source src="/LBMRoadmap.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <Feed />
    </>
  );
}
