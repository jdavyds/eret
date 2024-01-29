import video from "../../assets/video.png";

export default function About() {
  return (
    <main className="px-5 md:px-20 py-10 flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl md:text-[40px] font-medium text-secondary">
          About Us
        </h3>
        <p className="md:w-2/3">
          At ECommercial Real Estate Trading Company (ERET), we envision a
          future where financial empowerment is accessible to all through
          strategic real estate investment. Established with a passion for
          reshaping the way individuals engage with the real estate market, ERET
          is more than an investment platform; {`it's`} a catalyst for building
          lasting prosperity.
        </p>
      </div>
      <img src={video} alt="" className="w-full " />
    </main>
  );
}
