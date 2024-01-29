import logo from "../assets/logo.png";
import gasus from "../assets/gasus.png";
import sbo from "../assets/sbo.png";
import { FaArrowRight } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="flex flex-col bg-secondary text-white lato text-sm md:text-base">
      <section className="px-5 md:px-20 w-full leading-relaxed grid grid-cols-2 md:grid-cols-[1fr_1.5fr_1.5fr] justify-between gap-4 md:gap-8">
        <div className="flex flex-col items-start gap-4 col-span-2 md:col-span-1 py-5 md:py-12">
          <img src={logo} alt="" className="object-contain " />
          <p>
            gateway to global real estate wealth. Buy in, Buy out, diversify,
            and watch your real estate wealth grow with the ends in mind.
          </p>
        </div>
        <nav className="flex md:justify-center font-[400] py-2 md:py-12">
          <div className="flex flex-col gap-3">
            <h4 className="mb-2 font-[700] text-lg text-head">Socials</h4>
            <a href="/">Instagram</a>
            <a href="/">LinkedIn</a>
            <a href="/">Twitter</a>
            <a href="/">Facebook</a>
          </div>
        </nav>
        <nav className="flex flex-col gap-5 col-span-2 md:col-span-1 py-2 md:py-12">
          <p className="text-lg text-primary font-bold uppercase">
            Subscribe to our Newsletter
          </p>
          <label className="flex items-center h-12 px-2 bg-white border border-[#303030] text-dark rounded-xl">
            <input
              type="text"
              className="px-5 h-full w-full placeholder-light"
              placeholder="Email address"
            />
            <button className="h-[80%] px-4 my-auto min-w-fit bg-primary text-white rounded-xl text-xl">
              <FaArrowRight />
            </button>
          </label>
          <div className="flex flex-col md:flex-row gap-2 justify-start items-start">
            <img src={sbo} alt="" className="h-16 object-contain" />
            <div className="flex gap-1">
              <img src={gasus} alt="" className="object-contain" />
              <div className="flex text-xs md:text-sm">
                We are businesses built on the foundation of christian values
                and beliefs
              </div>
            </div>
          </div>
        </nav>
      </section>
      <div className="flex flex-col gap-10 leading-loose px-5 md:px-20 py-5 md:py-12">
        <span className="w-full text-sm md:text-base flex flex-col justify-center items-center gap-3">
          <span className="text-center">
            Confidence Guaranteed: With ERET, your investment is backed by a
            30-day money-back guarantee. Invest with peace of mind and watch
            your wealth grow risk-free.
          </span>
          <span className="text-center">
            © 2024 ECommercial Real Estate Trading Company Nigeria Ltd (ERET)..
            All rights reserved
          </span>
        </span>
      </div>
    </footer>
  );
}
