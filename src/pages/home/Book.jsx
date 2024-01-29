import { Btn } from "../../utils/Button";

export default function Book() {
  return (
    <main className="px-5 md:px-20 py-10 md:py-20 bg-primary-light bg-contain bg-right-bottom bg-no-repeat back">
      <div className="flex flex-col gap-5 md:w-2/3">
        <h3 className="text-2xl md:text-[40px] font-medium text-secondary leading-normal">
          Ready to unlock the door to financial freedom through real estate?
        </h3>
        <p className="md:text-xl">
          Seize the Future with ERET! Elevate your wealth through transparent
          co-ownership. Join Now for prime property access and shared success.
        </p>
        <Btn name="Book Appointment Now" slug="/" style="" />
      </div>
    </main>
  );
}
