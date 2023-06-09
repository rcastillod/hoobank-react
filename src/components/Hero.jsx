import React from "react";

// Styles
import styles from "../style";
// Assets
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted/GetStarted";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      {/* Hero content */}
      <div
        className={`relative flex-1 sm:flex-[1.2_1_0%] ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex fle-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-5 sm:mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p
            className={`${styles.paragraph} ml-2 uppercase hero__discount-text`}
          >
            <span className="text-white">20% </span>
            discount for <span className="text-white">1 month </span>
            account
          </p>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold text-white hero__title">
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Generation</span>
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>
        <h1 className="font-poppins font-semibold text-white hero__title">
          Payment Method.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
        <div className="absolute w-[45%] h-[45%] z-1 left-0 bottom-40 white__gradient rounded-full" />
      </div>
      {/* /Hero content */}

      {/* Hero image */}
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={robot}
          alt="billing"
          className="w-full h-full relative z-[5]"
        />
        {/* Gradient background */}
        <div className="absolute w-[40%] h-[35%] z-0 top-0 pink__gradient" />
        <div className="absolute w-[80%] h-[80%] z-1 bottom-40 white__gradient rounded-full" />
        <div className="absolute w-[50%] h-[50%] z-0 right-20 bottom-20 blue__gradient" />
        {/* /Gradient background */}
      </div>
      {/* /Hero image */}

      {/* Hero button mobile */}
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
      {/* /Hero button mobile */}
    </section>
  );
};

export default Hero;
