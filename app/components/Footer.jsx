import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function Footer() {
  const navigation = [
    {
      name: "Home",
      href: "/",
      section: "Navigation",
    },
    {
      name: "Whitepaper",
      href: "/whitepaperLibertum.pdf",
      section: "Navigation",
    },
    {
      name: "Buy Libertum",
      href: "/ico",
      section: "Navigation",
    },
    {
      name: "Waitlist",
      href: "/subscribe",
      section: "Navigation",
    },
    {
      name: "About Us",
      href: "/",
      section: "Navigation",
    },
    {
      name: "FAQs",
      href: "/support",
      section: "Support",
    },
    {
      name: "Support",
      href: "/support",
      section: "Support",
    },
    {
      name: "hello@libertum.io",
      href: "mailto:hello@libertum.io",
      section: "Contact",
    },
    {
      name: "Contact Us Form",
      href: "/contact",
      section: "Contact",
    },
  ];

  const sections = {};
  navigation.forEach((item) => {
    if (!sections[item.section]) {
      sections[item.section] = [];
    }
    sections[item.section].push(item);
  });

  const socialLinks = [
    {
      href: "https://discord.gg/AyGNmQx3KB",
      icon: <Discord />,
      label: "Discord",
    },
    {
      href: "https://twitter.com/libertum_token",
      icon: <Twitter />,
      label: "Twitter",
    },
    {
      href: "https://facebook.com/libertum1",
      icon: <Facebook />,
      label: "Facebook",
    },
    {
      href: "https://www.instagram.com/libertum.io/",
      icon: <Instagram />,
      label: "Instagram",
    },
    {
      href: "https://www.linkedin.com/company/libertum1",
      icon: <Linkedin />,
      label: "Linkedin",
    },
    {
      href: "https://t.me/libertum1",
      icon: <Telegram />,
      label: "Telegram",
    },
  ];

  return (
    <>
      <footer>
        <div className="bg-slate-100 bg-opacity-30 py-4 text-gray-700">
          <div className="mx-auto px-10 sm:px-24">
            <div className="-mx-4 flex flex-wrap justify-between">
              <div className="px-4 my-4 w-full xl:w-2/6 2xl:w-full">
                {/* Utiliza NextImage para la imagen de Next */}
                <Link
                  href="/"
                  className="hover:scale-105 duration-500 flex items-center space-x-2 text-2xl font-medium text-bg-100 "
                >
                  <Image
                    src="/img/logo.svg"
                    alt="N"
                    width="32"
                    height="32"
                    className="w-8"
                  />
                  <span className="font-logo">L I B E R T U M</span>
                </Link>
                <p className="text-left mt-6 text-gray-800">
                  Our mission is to make real estate investment accessible to
                  everyone.
                </p>

                <div className="text-gray-800 w-fit mt-12">
                  <div>Follow us</div>
                  <div className="flex mt-5 space-x-5 text-gray-400">
                    {socialLinks.map((link, index) => (
                      <Link href={link.href} key={index}>
                        <p
                          target="_blank"
                          rel="noopener"
                          className="hover:scale-105 duration-200"
                          aria-label={link.label}
                        >
                          {link.icon}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {Object.entries(sections).map(([section, items], index) => (
                <div key={index} className="px-4 my-4 w-full sm:w-auto">
                  <div>
                    <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">
                      {section}
                    </h2>
                  </div>
                  <ul className="leading-8">
                    {items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <Link href={item.href}>
                          <p className="hover:text-blue-400">{item.name}</p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* <div className="bg-indigo-700 py-4 text-gray-100">
    <div className="container mx-auto px-4">
      <div className="-mx-4 flex flex-wrap justify-between">
        <div className="px-4 w-full text-center sm:w-auto sm:text-left">
          Copyright © 2023          
          Libertum - All Rights Reserved.
        </div>
        <div className="px-4 w-full text-center sm:w-auto sm:text-left">
          -
        </div>
      </div>
    </div>
  </div> */}
      </footer>
    </>
  );
}

const Twitter = ({ size = 24 }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_502_55)">
      <mask
        id="mask0_502_55"
        maskUnits="userSpaceOnUse"
        x="3"
        y="3"
        width="18"
        height="18"
      >
        <path d="M21 3H3V21H21V3Z" fill="white" />
      </mask>
      <g mask="url(#mask0_502_55)">
        <path
          d="M18.8906 3H5.10938C3.9444 3 3 3.9444 3 5.10938V18.8906C3 20.0556 3.9444 21 5.10938 21H18.8906C20.0556 21 21 20.0556 21 18.8906V5.10938C21 3.9444 20.0556 3 18.8906 3Z"
          fill="black"
        />
        <path
          d="M15.5122 6.51562H17.373L13.3078 11.1619L18.0902 17.4844H14.3456L11.4127 13.6498L8.05687 17.4844H6.19501L10.5431 12.5147L5.95538 6.51562H9.79499L12.4461 10.0206L15.5122 6.51562ZM14.8592 16.3706H15.8902L9.23474 7.57088H8.1283L14.8592 16.3706Z"
          fill="white"
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_502_55">
        <rect width="18" height="18" fill="white" transform="translate(3 3)" />
      </clipPath>
    </defs>
  </svg>
);

const Facebook = ({ size = 24 }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22 12.0607C22 6.504 17.5233 2 12 2C6.47667 2 2 6.504 2 12.0607C2 17.0833 5.656 21.2453 10.4373 22V14.9693H7.89867V12.06H10.4373V9.844C10.4373 7.32267 11.93 5.92933 14.2147 5.92933C15.308 5.92933 16.4533 6.126 16.4533 6.126V8.602H15.1913C13.9493 8.602 13.5627 9.378 13.5627 10.174V12.0607H16.336L15.8927 14.9687H13.5627V22C18.344 21.2453 22 17.0833 22 12.0607Z"
      fill="black"
    />
  </svg>
);
const Instagram = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    width="24px"
    height="25px"
  >
    <path d="M 21.580078 7 C 13.541078 7 7 13.544938 7 21.585938 L 7 42.417969 C 7 50.457969 13.544938 57 21.585938 57 L 42.417969 57 C 50.457969 57 57 50.455062 57 42.414062 L 57 21.580078 C 57 13.541078 50.455062 7 42.414062 7 L 21.580078 7 z M 47 15 C 48.104 15 49 15.896 49 17 C 49 18.104 48.104 19 47 19 C 45.896 19 45 18.104 45 17 C 45 15.896 45.896 15 47 15 z M 32 19 C 39.17 19 45 24.83 45 32 C 45 39.17 39.169 45 32 45 C 24.83 45 19 39.169 19 32 C 19 24.831 24.83 19 32 19 z M 32 23 C 27.029 23 23 27.029 23 32 C 23 36.971 27.029 41 32 41 C 36.971 41 41 36.971 41 32 C 41 27.029 36.971 23 32 23 z" />
  </svg>
);

const Linkedin = ({ size = 24 }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 4.32353V19.6765C21 20.0275 20.8606 20.3641 20.6123 20.6123C20.3641 20.8606 20.0275 21 19.6765 21H4.32353C3.97251 21 3.63586 20.8606 3.38765 20.6123C3.13944 20.3641 3 20.0275 3 19.6765V4.32353C3 3.97251 3.13944 3.63586 3.38765 3.38765C3.63586 3.13944 3.97251 3 4.32353 3H19.6765C20.0275 3 20.3641 3.13944 20.6123 3.38765C20.8606 3.63586 21 3.97251 21 4.32353ZM8.29412 9.88235H5.64706V18.3529H8.29412V9.88235ZM8.53235 6.97059C8.53375 6.77036 8.49569 6.57182 8.42035 6.3863C8.34502 6.20078 8.23387 6.03191 8.09328 5.88935C7.95268 5.74678 7.78537 5.6333 7.60091 5.5554C7.41646 5.47749 7.21846 5.43668 7.01824 5.43529H6.97059C6.5634 5.43529 6.17289 5.59705 5.88497 5.88497C5.59705 6.17289 5.43529 6.5634 5.43529 6.97059C5.43529 7.37777 5.59705 7.76828 5.88497 8.05621C6.17289 8.34413 6.5634 8.50588 6.97059 8.50588C7.17083 8.51081 7.37008 8.47623 7.55696 8.40413C7.74383 8.33202 7.91467 8.2238 8.0597 8.08565C8.20474 7.94749 8.32113 7.78212 8.40223 7.59897C8.48333 7.41582 8.52755 7.21848 8.53235 7.01824V6.97059ZM18.3529 13.2071C18.3529 10.6606 16.7329 9.67059 15.1235 9.67059C14.5966 9.6442 14.0719 9.75644 13.6019 9.9961C13.1318 10.2358 12.7328 10.5945 12.4447 11.0365H12.3706V9.88235H9.88235V18.3529H12.5294V13.8476C12.4911 13.3862 12.6365 12.9283 12.9339 12.5735C13.2313 12.2186 13.6567 11.9954 14.1176 11.9524H14.2182C15.06 11.9524 15.6847 12.4818 15.6847 13.8159V18.3529H18.3318L18.3529 13.2071Z"
      fill="black"
    />
  </svg>
);

const Discord = ({ size = 24 }) => (
  <svg
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.9308 6.02149C17.6561 5.43659 16.2892 5.00566 14.8599 4.75885C14.8339 4.75408 14.8079 4.76599 14.7945 4.7898C14.6187 5.10248 14.4239 5.51039 14.2876 5.83101C12.7503 5.60087 11.221 5.60087 9.71527 5.83101C9.57887 5.50326 9.37707 5.10248 9.20048 4.7898C9.18707 4.76678 9.16107 4.75488 9.13504 4.75885C7.70659 5.00487 6.33963 5.4358 5.06411 6.02149C5.05307 6.02625 5.04361 6.03419 5.03732 6.0445C2.44449 9.91814 1.73421 13.6966 2.08265 17.4281C2.08423 17.4464 2.09447 17.4639 2.10867 17.475C3.81934 18.7312 5.47642 19.4939 7.10273 19.9994C7.12876 20.0074 7.15634 19.9979 7.1729 19.9764C7.55761 19.4511 7.90054 18.8971 8.19456 18.3146C8.21192 18.2805 8.19535 18.24 8.15989 18.2265C7.61594 18.0202 7.098 17.7686 6.59977 17.4829C6.56037 17.4599 6.55721 17.4035 6.59347 17.3765C6.69831 17.298 6.80318 17.2162 6.9033 17.1337C6.92141 17.1186 6.94665 17.1154 6.96794 17.125C10.2411 18.6194 13.7846 18.6194 17.0191 17.125C17.0404 17.1146 17.0657 17.1178 17.0846 17.1329C17.1847 17.2154 17.2895 17.298 17.3952 17.3765C17.4314 17.4035 17.4291 17.4599 17.3897 17.4829C16.8914 17.7741 16.3735 18.0202 15.8288 18.2257C15.7933 18.2392 15.7775 18.2805 15.7949 18.3146C16.0952 18.8963 16.4381 19.4503 16.8157 19.9756C16.8315 19.9979 16.8599 20.0074 16.8859 19.9994C18.5201 19.4939 20.1772 18.7312 21.8879 17.475C21.9028 17.4639 21.9123 17.4472 21.9139 17.4289C22.3309 13.1148 21.2154 9.36738 18.9568 6.04529C18.9513 6.03419 18.9419 6.02625 18.9308 6.02149ZM8.68335 15.156C7.69792 15.156 6.88594 14.2513 6.88594 13.1402C6.88594 12.0292 7.68217 11.1244 8.68335 11.1244C9.69239 11.1244 10.4965 12.0371 10.4807 13.1402C10.4807 14.2513 9.68451 15.156 8.68335 15.156ZM15.329 15.156C14.3435 15.156 13.5316 14.2513 13.5316 13.1402C13.5316 12.0292 14.3278 11.1244 15.329 11.1244C16.338 11.1244 17.1421 12.0371 17.1264 13.1402C17.1264 14.2513 16.338 15.156 15.329 15.156Z"
      fill="black"
    />
  </svg>
);

const Telegram = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
    width="24"
    height="25"
  >
    <path d="M25,2c12.703,0,23,10.297,23,23S37.703,48,25,48S2,37.703,2,25S12.297,2,25,2z M32.934,34.375 c0.423-1.298,2.405-14.234,2.65-16.783c0.074-0.772-0.17-1.285-0.648-1.514c-0.578-0.278-1.434-0.139-2.427,0.219 c-1.362,0.491-18.774,7.884-19.78,8.312c-0.954,0.405-1.856,0.847-1.856,1.487c0,0.45,0.267,0.703,1.003,0.966 c0.766,0.273,2.695,0.858,3.834,1.172c1.097,0.303,2.346,0.04,3.046-0.395c0.742-0.461,9.305-6.191,9.92-6.693 c0.614-0.502,1.104,0.141,0.602,0.644c-0.502,0.502-6.38,6.207-7.155,6.997c-0.941,0.959-0.273,1.953,0.358,2.351 c0.721,0.454,5.906,3.932,6.687,4.49c0.781,0.558,1.573,0.811,2.298,0.811C32.191,36.439,32.573,35.484,32.934,34.375z" />
  </svg>
);
