import blog1 from "../../assets/blog1.png";
import blog2 from "../../assets/blog2.png";
import blog3 from "../../assets/blog3.png";

export default function News() {
  return (
    <main className="px-5 md:px-20 py-10 md:py-20 flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl md:text-[40px] font-medium text-secondary">
          News & Blogs
        </h3>
        <p className="md:w-1/2">
          Investing with ERET is a straightforward and empowering experience
          designed to put you in control of your financial destiny.
        </p>
      </div>
      <div className="flex flex-col md:grid grid-cols-2 gap-10 md:gap-16">
        <div className="flex flex-col gap-10">
          <nav className="flex flex-col md:flex-row gap-5">
            <img
              src={blog1}
              alt=""
              className="w-full md:w-[unset] h-[50vw] md:h-[unset] object-cover rounded-xl"
            />
            <div className="flex flex-col gap-2">
              <h4 className="text-lg text-black font-medium">
                The {`Beginner's`} Guide to Real Estate Investment with ERET
              </h4>
              <span className="flex gap-1 items-center text-sm">
                January 14, 2024
              </span>
              <p>
                An overview of the basics for individuals new to real estate
                investment, including tips on getting started with ERET.
              </p>
            </div>
          </nav>
          <nav className="flex flex-col md:flex-row gap-5">
            <img
              src={blog2}
              alt=""
              className="w-full md:w-[unset] h-[50vw] md:h-[unset] object-cover rounded-xl"
            />
            <div className="flex flex-col gap-2">
              <h4 className="text-lg text-black font-medium">
                Diversifying Your Portfolio: A Deep Dive into {`ERET's`}{" "}
                Property Selection
              </h4>
              <span className="flex gap-1 items-center text-sm">
                January 14, 2024
              </span>
              <p>
                Explore the diverse range of properties available through ERET
                and how diversification can enhance your investment strategy.
              </p>
            </div>
          </nav>
        </div>
        <nav className="flex flex-col gap-5">
          <img src={blog3} alt="" className="w-full object-cover" />
          <div className="flex flex-col gap-2">
            <h4 className="text-lg text-black font-medium">
              Transparent Responsible Dealings Matters: Understanding the Real
              Estate Co-Ownership Rights -RECORs trade And Exchange Market
              System.
            </h4>
            <span className="flex gap-1 items-center text-sm">
              January 14, 2024
            </span>
            <p>
              Delve into the transparency measures implemented by ERET, offering
              investors clear insights into the investment process. Delve into
              the transparency measures implemented by ERET, Read More
            </p>
          </div>
        </nav>
      </div>
    </main>
  );
}
