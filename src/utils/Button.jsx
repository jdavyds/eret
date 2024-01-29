import { Link } from "react-router-dom";

export function Btn({ name, slug, style }) {
  return (
    <Link
      to={slug}
      className={`min-w-fit w-fit h-10 md:h-12 font-[500] md:font-[600] text-white bg-primary rounded-full flex items-center justify-center  px-4 md:px-8 ${style}`}
    >
      {name}
    </Link>
  );
}

export function BtnB({ name, slug, style }) {
  return (
    <Link
      to={slug}
      className={`min-w-fit w-fit h-10 md:h-12 font-[500] md:font-[600] text-secondary border border-secondary bg-inherit rounded-full flex items-center justify-center px-8 ${style}`}
    >
      {name}
    </Link>
  );
}
