import styles from "./SupportCenter.module.scss";
import Faq from "./Faq/Faq";
import Header from "../(home)/Header";

export default function Support() {

  return (
    <div>
      <Header />
      <div className="bg-transparent">
        <div className="mx-auto flex flex-col items-center py-8">
          <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col mb-5 sm:mb-10">
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-semibold leading-10">
              How can we
              <span className="text-blue-800"> help </span>
              you?
            </h1>
            <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-600 font-normal text-center text-xl">
            Browse through our frequently asked questions, tutorials, and other self-help resources to find the answers you need.
            </p>
          </div>
        </div>
        <Faq />
      </div>
    </div>
  );
}