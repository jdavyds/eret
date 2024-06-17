import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 left-0 z-[9999] bg-white shadow-md px-5 md:px-20 py-2 flex justify-between items-center">
      <NavLink to="/" className="flex justify-start">
        <img src={logo} alt="" className="object-contain h-8 md:h-14" />
      </NavLink>
      <a
        href="/#own"
        className={`min-w-fit w-fit h-10 md:h-12 font-[500] md:font-[600] text-white bg-primary rounded-full flex items-center justify-center  px-4 md:px-8 text-sm md:hidden`}
      >
        Own a RECORs Share
      </a>
      <nav className="hidden md:flex gap-5 items-center">
        {/* <Btn name="Own a RECORs Share" slug="/" /> */}
        {/* <BtnB name="Book An Appointment" slug="/book" /> */}
        <a
          href="/#own"
          className={`min-w-fit w-fit h-10 md:h-12 font-[500] md:font-[600] text-white bg-primary rounded-full flex items-center justify-center  px-4 md:px-8`}
        >
          Own a RECORs Share
        </a>
        <a
          href="/#book"
          className={`min-w-fit w-fit h-10 md:h-12 font-[500] md:font-[600] text-secondary border border-secondary bg-inherit rounded-full flex items-center justify-center px-8`}
        >
          Book An Appointment
        </a>
      </nav>
    </header>
  );
}
