import Image from "next/image";
import { Slide } from "react-awesome-reveal";

export default function GridInfoSection() {

  const cardsData = [
    {
      title: 'No Transfer of Ownership',
      description: 'Since there is no ownership transfer, this investment remains delta-neutral, eliminating capital depreciation risk.',
      imageSrc: '/assetsLanding/noTransfer.svg',
    },
    {
      title: 'No Hidden Fees',
      description: 'Our project prioritizes transparency, allowing investors to consider all factors before making informed decisions.',
      imageSrc: '/assetsLanding/eye.svg',
    },
    {
      title: 'Secure Platform',
      description: 'Properties are used as collateral for the rental income tokens listed, ensuring the security of your initial investment.',
      imageSrc: '/assetsLanding/secure.svg',
    },
    {
      title: 'High Rental Yield',
      description: 'Invest in prime real estate within London\'s bustling commercial district and enjoy substantial monthly income.',
      imageSrc: '/assetsLanding/highRental.svg',
    },
  ];


  return (
    <>

      <div className= "mt-32 bg-white lg:bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] bg-opacity-20  rounded-3xl border-gray-200  p-16 shadow-3xl lg:mx-auto lg:max-w-screen-2xl">

      

      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <div className="text-gray-100">
          <h2 className="my-8 text-2xl font-bold text-slate-800 md:text-4xl">Why Libertum?</h2>
          <p className="text-gray-800 text-xl"> Libertum distinguishes itself from other real estate projects in the
            crypto space through several key characteristics:</p>
        </div>


        <div className="my-12 lg:my-0 lg:max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-center sm:max-w-xs md:max-w-full">

        {/* <div>
         <Image src="/assetsLanding/macbook.svg" alt="notebook" width={200} height={200} className="w-[120rem]"  />
        </div> */}

        <div className="grid max-w-4xl lg:max-w-6xl grid-cols-1 mx-auto mt-2 text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-4 sm:mt-12 lg:mt-20 sm:text-left">
          
        {cardsData.map((card, index) => (
           <Slide direction={"left"} triggerOnce={false}>
          <div key={index} className="group relative bg-gray-200 rounded-xl after:transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
            <div className="relative space-y-8 py-12 p-8 hover:scale-110">
              <Image src={card.imageSrc} alt={card.title} width={200} height={200} className="w-12 h-12" style={{ color: 'transparent' }} />
              <div className="space-y-2">
                <h5 className="text-xl font-semibold text-gray-500 transition group-hover:text-secondary">{card.title}</h5>
                <p className="text-gray-500">{card.description}</p>
              </div>
            </div>            
          </div>
          </Slide>
        ))}

        </div>


        </div>



      </div>



      </div>


      
    </>
  );
}
