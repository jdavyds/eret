import { Btn } from "../../utils/Button";
// import bg from "../../assets/hero.png";

export default function Hero() {
  return (
    <main
      className={`px-5 md:px-20 py-10 md:py-20 hero bg-primary-light bg-contain bg-right-bottom bg-no-repeat`}
    >
      <div className="flex flex-col gap-5 md:w-1/2">
        <h3 className="text-2xl md:text-[48px] font-extrabold text-secondary leading-normal">
          Unlock Your Future with {`ERET's`} Real Estate Investments
        </h3>
        <p className="md:text-xl">
          we redefine real estate investing providing access for you to own
          choice real estate globally through the trade and exchange of Real
          Estate Co-Ownership Rights-RECORs for as low as 10th of a dollar
          ($0.10) per RECOR.
        </p>
        <Btn name="Own a RECORs Share" slug="/" />

        <nav className="flex flex-col gap-4 mt-4">
          <b className="text-3xl md:text-[56px] text-secondary">6.5% to 20%</b>
          <p>Rental Yields</p>
        </nav>
      </div>
    </main>
  );
}
