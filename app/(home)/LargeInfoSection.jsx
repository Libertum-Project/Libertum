'use client'
import Image from "next/image";
import { Slide } from "react-awesome-reveal";

export default function LargeInfoSection() {
  return (
    <>
      <div className="relative overflow-hidden bg-gray-100 bg-opacity-20 rounded-xl pt-16 pb-32 space-y-24 mt-6">
        {/* Primera Sección */}
        <Slide direction={"left"} triggerOnce={false}>
          <div className="relative">
            <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
              <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
                <div>
                  <div>
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-8 w-8 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                        ></path>
                      </svg>
                    </span>
                  </div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-700">
                      The next stage in the evolution of real estate investment
                      is here.
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                      Libertum eliminates the need for intermediaries, making
                      real estate investment cost-effective and efficient,
                      benefiting both investors and property professionals.
                    </p>
                    <p className="mt-4 text-lg text-gray-600">
                      Libertum will unite small and large investors with
                      property owners on our global peer to peer platform,
                      granting local property investment opportunities global
                      exposure and opening doors for retail investors worldwide.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                  <Image
                    loading="lazy"
                    width={647}
                    height={486}
                    className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    style={{ color: "transparent" }}
                    src="/assetsLanding/phoneMarketplace.png"
                    alt="Imagen 1"
                  />
                </div>
              </div>
            </div>
          </div>
        </Slide>

        {/* Segunda Sección */}
        <Slide direction={"right"} triggerOnce={false}>
          <div className="relative">
            <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
              <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">
                <div>
                  <div>
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-8 w-8 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                        ></path>
                      </svg>
                    </span>
                  </div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-600">
                      Simplifying Real Estate Investment
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
                      Goodbye to the complexities of ownership transfers and the
                      burden of unforeseen expenses.
                    </p>
                    <p className="mt-4 text-lg text-gray-500">
                      At <span className="text-bold">Libertum</span> we are
                      introducing a ground breaking approach to real estate
                      investment, fostering accessibility, liquidity, and
                      flexibility, and presenting an array of opportunities for
                      both property owners and investors. Our platform’s
                      innovative technology sets us apart to revolutionise the
                      real estate industry.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                  <Image
                    alt="Interfaz de usuario de correo electrónico"
                    loading="lazy"
                    width={647}
                    height={486}
                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                    style={{ color: "transparent" }}
                    src="/assetsLanding/housesblue.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </Slide>
        {/* Tercera Sección */}
        <Slide direction={"left"} triggerOnce={false}>
          <div className="relative">
            <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
              <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">
                <div>
                  <div>
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-8 w-8 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                        ></path>
                      </svg>
                    </span>
                  </div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-700">
                      Staking Pool
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                      We are different. 5% of our investment returns will be
                      dedicated to an ongoing buyback and burn strategy, aimed
                      at increasing the value of our tokens and benefiting early
                      stakeholders.
                    </p>

                    <h2 className="text-3xl mt-6 font-bold tracking-tight text-gray-700">
                      Rental Income Token (RIT)
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                      $LBM can be used to participate in Libertum fractionalised
                      rental income ecosystem. Use $LBM to purchase RITs and sit
                      back and enjoy rental income from premium properties. Let
                      the future invest in you!
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                  <Image
                    loading="lazy"
                    width={646}
                    height={485}
                    className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    style={{ color: "transparent" }}
                    src="/assetsLanding/bussinessLaptop.jpg"
                    alt="Two people looking a chart in a laptop"
                  />
                </div>
              </div>
            </div>
          </div>
        </Slide>
      </div>
    </>
  );
}
