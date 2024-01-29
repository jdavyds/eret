import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import { Btn, BtnB } from "../utils/Button";

export default function Header() {
  return (
    <header className="sticky top-0 left-0 z-[9999] bg-white shadow-md px-5 md:px-20 py-2 flex justify-between items-center">
      <NavLink to="/" className="flex justify-start">
        <img src={logo} alt="" className="object-contain h-8 md:h-14" />
      </NavLink>
      <Btn name="Own a RECORs Share" slug="/" style="text-sm md:hidden"  />
      <nav className="hidden md:flex gap-5 items-center">
        <Btn name="Own a RECORs Share" slug="/"  />
        <BtnB name="Book An Appointment" slug="/book"  />
      </nav>
    </header>
  );
}
