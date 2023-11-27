import Image from "next/image";

export default function GridInfoSection() {
  return (
    <>
      <div className="pt-32">
        <div className=" bg-white lg:bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] bg-opacity-70 from-transparent via-slate-100 rounded-3xl to-gray-200 border-gray-200  p-16 shadow-3xl lg:mx-auto lg:max-w-screen-2xl">
          <div className="text-center lg:text-left text-black text-3xl font-bold">
            Why Libertum?
          </div>
          <div className="text-center lg:text-left pt-5 text-gray-600 text-xl font-medium">
            Libertum distinguishes itself from other real estate projects in the
            crypto space through several key characteristics:
          </div>
          <div className="grid place-items-center grid-cols-1 gap-4 space-y-0 text-center lg:gap-8 lg:grid-cols-4 lg:text-left">
            <div>
              <div>
                <Image
                  className="mt-8 md:mx-auto lg:mt-0 p-2 rounded-2xl drop-shadow-2xl hover:scale-105 duration-500"
                  src="/img/no_transfer_of_ownership.webp"
                  style={{ margin: "0 auto" }}
                  alt="No Transfer of Ownership"
                  width={400}
                  height={400}
                ></Image>
                <p className="mt-5 text-center text-lg font-semibold leading-6 text-black">
                  No Transfer of Ownership
                </p>
              </div>
              <div className="mt-2 text-center text-base text-gray-600">
                Since there is no ownership transfer, this investment remains
                delta-neutral, eliminating capital depreciation risk.
              </div>
            </div>
            <div>
              <div>
                <Image
                  className="mt-8 md:mx-auto lg:mt-0 p-2 rounded-2xl drop-shadow-2xl hover:scale-105 duration-500"
                  src="/img/No_hidden_fee_Icon.webp"
                  style={{ margin: "0 auto" }}
                  alt="No Hidden Fees"
                  width={400}
                  height={400}
                ></Image>
                <p className="mt-5 text-center text-lg font-semibold leading-6 text-black">
                  No Hidden Fees
                </p>
              </div>
              <div className="mt-2 text-center text-base text-gray-600">
                Our project prioritizes transparency, allowing investors to
                consider all factors before making informed decisions.
              </div>
            </div>
            <div>
              <div>
                <Image
                  className="mt-8 md:mx-auto lg:mt-0 p-2 rounded-2xl drop-shadow-2xl hover:scale-105 duration-500"
                  src="/img/Secure_icon.webp"
                  style={{ margin: "0 auto" }}
                  alt="Secure Platform"
                  width={400}
                  height={400}
                ></Image>
                <p className="mt-5 text-center text-lg font-semibold leading-6 text-black">
                  Secure Platform
                </p>
              </div>
              <div className="mt-2 text-center text-base text-gray-600">
                Properties are used as collateral for the rental income tokens
                listed, ensuring the security of your initial investment.
              </div>
            </div>
            <div>
              <div>
                <Image
                  className="mt-8 md:mx-auto lg:mt-0 p-2 rounded-2xl drop-shadow-2xl hover:scale-105 duration-500"
                  style={{ margin: "0 auto" }}
                  src="/img/high_rental_yield.webp"
                  alt="High Rental Yield"
                  width={400}
                  height={400}
                ></Image>
                <p className="mt-5 text-lg text-center font-semibold leading-6 text-black">
                  High Rental Yield
                </p>
              </div>
              <div className="mt-2 text-center text-base text-gray-600">
                Invest in prime real estate within London&apos;s bustling
                commercial district and enjoy substantial monthly income.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
