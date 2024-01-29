export default function Subscribe() {
  return (
    <main className="px-5 md:px-20 flex flex-col md:flex-row gap-10 py-12 w-full leading-loose justify-between items-start text-white bg-primary">
      <div className="w-full md:w-1/3 flex flex-col gap-5 md:gap-10">
        <b className="text-xl md:text-[60px] font-[500] text-white">
          Newsletter
        </b>
        <p className="lato">
        Be the first one to know about discounts, offers, news, giveaways and events
        </p>
        <label className="flex h-14 w-full rounded-full border">
          <input
            type="text"
            className="w-full h-full px-5 bg-inherit rounded-full outline-none text-sm"
            placeholder="Enter your email address"
          />
          <button className="bg-white text-primary font-[600] lato rounded-full px-5 min-w-fit">
            Subscribe
          </button>
        </label>
      </div>
    </main>
  );
}
