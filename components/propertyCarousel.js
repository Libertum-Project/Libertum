import Image from "next/image";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const stats = [
  { id: 1, name: "Property Value", value: "$700,000" },
  { id: 2, name: "Projected Yield", value: "3.6%" },
  { id: 3, name: "Annual Repayment", value: "10.1%" },
  { id: 4, name: "Term Length", value: "15 Years" },
];

export default function PropertyCarousel() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="lg:min-w-screen lg:mx-auto lg:mt-24">
      <h2 className="lg:py-12 py-4  text-center lg:text-5xl text-2xl font-bold tracking-tight text-gray-900">
        See Our Properties
      </h2>
      <div className="min-w-screen">
        <Link href="https://www.marketplace.libertum.io/">
          <Carousel
            className=""
            swipeable={true}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={false}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            <Image
              className="h-570 w-full"
              src="/img/property/img1.png"
              alt="property image"
              width={570}
              height={570}
            />
            <Image
              className="h-570 w-full"
              src="/img/property/img2.png"
              alt="property image"
              width={570}
              height={570}
            />
            <Image
              className="h-570 w-full"
              src="/img/property/img3.png"
              alt="property image"
              width={570}
              height={570}
            />
            <Image
              className="h-570 w-full"
              src="/img/property/img4.png"
              alt="property image"
              width={570}
              height={570}
            />
            <Image
              className="h-570 w-full"
              src="/img/property/img5.png"
              alt="property image"
              width={570}
              height={570}
            />
            <Image
              className="h-570 w-full"
              src="/img/property/img6.png"
              alt="property image"
              width={570}
              height={570}
            />
            <Image
              className="h-570 w-full"
              src="/img/property/img8.png"
              alt="property image"
              width={570}
              height={570}
            />
            <Image
              className="h-570 w-full"
              src="/img/property/img9.png"
              alt="property image"
              width={570}
              height={570}
            />
            <Image
              className="h-570 w-full"
              src="/img/property/img10.png"
              alt="property image"
              width={570}
              height={570}
            />
            <Image
              className="h-570 w-full"
              src="/img/property/img11.png"
              alt="property image"
              width={570}
              height={570}
            />
            <Image
              className="h-570 w-full"
              src="/img/property/img13.png"
              alt="property image"
              width={570}
              height={570}
            />
          </Carousel>
        </Link>

        <div className="py-8 lg:py-16">
          <div className="mx-auto max-w-screen-2xl px-6 lg:px-8">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-2 lg:gap-y-16 text-center lg:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  className="mx-auto flex max-w-xs flex-col lg:gap-y-4"
                >
                  <dt className="text-base leading-7 text-gray-600">
                    {stat.name}
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
